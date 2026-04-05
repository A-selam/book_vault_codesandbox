import { BookOpen, Menu } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

export function Navbar() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isActive = (to: string) => pathname === to;

  const linkBase =
    "relative px-1 pb-2 text-xs uppercase tracking-[0.22em] text-on-surface-variant transition-colors duration-300 hover:text-on-surface";

  const activeLink = "text-on-surface blur-sliver font-bold text-white";

  return (
    <nav className="glass-nav mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
      <div>
        <Link className="flex items-center gap-2" to="/">
          <BookOpen className="h-4 w-4 text-surface-tint" strokeWidth={1.7} />
          <p className="text-lg font-semibold tracking-tight">BookVault</p>
        </Link>
      </div>

      <button className="text-on-surface-variant transition-colors hover:text-on-surface md:hidden">
        <Menu />
      </button>

      <ul className="hidden gap-8 md:flex">
        <li>
          <Link
            className={`${linkBase} ${isActive("/") ? activeLink : ""}`.trim()}
            to="/"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={`${linkBase} ${isActive("/browse") ? activeLink : ""}`.trim()}
            to="/browse"
          >
            Browse
          </Link>
        </li>
        <li>
          <Link
            className={`${linkBase} ${isActive("/vault") ? activeLink : ""}`.trim()}
            to="/vault"
          >
            My Vault
          </Link>
        </li>
      </ul>
    </nav>
  );
}
