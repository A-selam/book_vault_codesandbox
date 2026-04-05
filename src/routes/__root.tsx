/* eslint-disable react-refresh/only-export-components */
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <header className="sticky top-5 z-40 border-b border-outline-soft bg-surface/80 backdrop-blur-xl">
        <Navbar />
      </header>

      <main className="mx-auto w-full max-w-6xl grow px-5 pb-14 pt-8 md:px-8 md:pt-10">
        <Outlet />
      </main>

      <footer className="mx-auto w-full max-w-6xl border-t border-outline-soft px-5 py-10 text-xs uppercase tracking-[0.16em] text-on-surface-variant/70 md:px-8">
        © 2026 Personal Book Vault.
      </footer>
    </div>
  );
}
