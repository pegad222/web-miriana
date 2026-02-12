import "server-only";

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

type CookieStore = Awaited<ReturnType<typeof cookies>>;

export async function createSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Configura NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY para habilitar la sección privada"
    );
  }

  const cookieStore = (await cookies()) as CookieStore & {
    set?: (name: string, value: string, options?: CookieOptions) => void;
  };

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll().map(({ name, value }) => ({ name, value }));
      },
      setAll(cookiesToSet) {
        if (typeof cookieStore.set !== "function") {
          return;
        }

        cookiesToSet.forEach(({ name, value, options }) => {
          try {
            cookieStore.set?.(name, value, options);
          } catch {
            // Next.js only permite mutar cookies en Server Actions/Route Handlers; ignoramos errores en otros contextos.
          }
        });
      },
    },
  });
}
