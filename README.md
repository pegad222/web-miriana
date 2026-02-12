## Miriana · Web Estratégica Premium

Sitio desarrollado con Next.js 15 (App Router), Tailwind CSS y Supabase para apoyar la práctica de intervención jurídica estratégica descrita en `PRD_Web_Estrategico_Premium.md`.

### Páginas públicas

- Home con hero estratégico, método, servicios, CTA y vista previa del blog.
- Método, Servicios, Sesión Estratégica, Sobre mí, Artículos, Contacto, Avisos legales.
- Blog dinámico con rutas `/blog` y `/blog/[slug]`.

### Sección privada

- `/admin/login`: acceso mediante Supabase Auth.
- `/admin`: editor para crear artículos (estado borrador/publicado) y listado de artículos publicados.

## Stack

- Next.js 15 · App Router · Server Actions
- Tailwind CSS + diseño premium (tipografía Playfair Display + Source Sans)
- Supabase (Auth + Postgres + Storage opcional)
- Zod para validaciones y server actions seguras

## Requisitos previos

- Node.js 18.18+ (se recomienda 20.11 para evitar avisos de dependencias)
- Cuenta en [Supabase](https://supabase.com)

## Puesta en marcha

```bash
npm install
cp .env.example .env.local
npm run dev
```

La web estará disponible en [http://localhost:3000](http://localhost:3000).

## Variables de entorno

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=<tu proyecto>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service role key, solo servidor>
```

> **Importante**: el Service Role Key *nunca* debe exponerse al cliente. Solo se usa en server actions (contacto y creación de artículos).

## Esquema Supabase

Ejecuta estas sentencias en el SQL editor de Supabase:

```sql
create table public.articles (
	id uuid primary key,
	title text not null,
	slug text unique not null,
	excerpt text not null,
	content text not null,
	cover_image text not null,
	tags text[] default '{}',
	status text default 'draft' check (status in ('draft','published')),
	created_at timestamptz default now()
);

create table public.leads (
	id uuid primary key,
	full_name text not null,
	email text not null,
	phone text,
	conflict_type text check (conflict_type in ('familiar','laboral')),
	summary text,
	is_escalating boolean default false,
	created_at timestamptz default now()
);
```

### RLS

```sql
alter table public.articles enable row level security;
alter table public.leads enable row level security;
```

Políticas sugeridas:

- `articles`: permitir `select` a `anon` (blog público) y `insert/update/delete` a usuarios autenticados con rol `authenticated`.
- `leads`: solo `service_role` puede insertar (ya lo gestiona la server action); no expongas la tabla a `anon`.

## Flujo de trabajo

1. Crea un usuario en Supabase Auth (email + password).
2. Configura las variables de entorno.
3. Accede a `/admin/login`, inicia sesión y crea artículos desde el editor.
4. El blog y la home consumirán automáticamente los artículos publicados. Si Supabase no está configurado, se muestran artículos mock para diseño.
5. El formulario de contacto inserta leads en Supabase (`leads`).

## Diseño y SEO

- Paleta basada en blanco, hueso, petróleo y burdeos con fondos texturizados.
- Tipografía diferenciada y uso de CTA claros para la Sesión Estratégica Inicial.
- Metadata Open Graph/Twitter configurada en `src/app/layout.tsx`.
- Componentes reutilizables y navegación sticky para reforzar la conversión.

## Scripts útiles

- `npm run dev`: desarrollo con Turbopack.
- `npm run build`: build de producción.
- `npm run start`: sirve la build.
- `npm run lint`: ESLint.

## Próximos pasos sugeridos

- Conectar Supabase Storage para subir imágenes de portada directamente desde el editor.
- Añadir analítica (Plausible/GA4) y mapa de calor.
- Integrar un sistema de reservas (Calendly/Cal.com) en la página de Sesión Estratégica.
