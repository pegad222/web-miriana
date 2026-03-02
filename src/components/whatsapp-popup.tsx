import Link from "next/link";

export function WhatsappPopup() {
  return (
    <Link
      href="https://wa.me/34617716666"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp para contactar al 617 716 666"
      className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-elevation transition hover:scale-105"
    >
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 3a13 13 0 0 0-11.19 19.4L3 29l6.86-1.8A13 13 0 1 0 16 3Zm0 2.6A10.4 10.4 0 0 1 26.4 16c0 5.74-4.68 10.4-10.4 10.4a10.3 10.3 0 0 1-4.9-1.26l-.35-.18-4.07 1.07 1.08-3.97-.2-.36A10.3 10.3 0 0 1 5.6 16 10.4 10.4 0 0 1 16 5.6Zm-5.04 5.06a.82.82 0 0 0-.6.3 5.64 5.64 0 0 0-.95 3.08 5.7 5.7 0 0 0 .86 3 9.7 9.7 0 0 0 4.32 4.05 7.3 7.3 0 0 0 3.07.92 5.6 5.6 0 0 0 2.9-.77.85.85 0 0 0 .39-.5c.12-.34.38-1.34.32-1.57a.7.7 0 0 0-.37-.46l-1.62-.74a.7.7 0 0 0-.74.12l-.56.58a.38.38 0 0 1-.43.12 7.6 7.6 0 0 1-1.9-1.18 8.1 8.1 0 0 1-1.49-1.78.42.42 0 0 1 .05-.45l.48-.61a.7.7 0 0 0 .11-.72l-.74-1.62a.71.71 0 0 0-.5-.4c-.22 0-1.24.26-1.58.38Z" />
      </svg>
      <span>WhatsApp</span>
    </Link>
  );
}
