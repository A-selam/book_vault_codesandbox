import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isActive = (to: string) => pathname === to;

  const linkBase =
    "relative px-1 pb-2 text-xs uppercase tracking-[0.22em] text-on-surface-variant transition-colors duration-300 hover:text-on-surface";

  const mobileLinkBase =
    "block rounded-md px-3 py-2 text-sm uppercase tracking-[0.2em] text-on-surface-variant transition-colors duration-300 hover:bg-white/5 hover:text-on-surface";

  const activeLink = "text-on-surface blur-sliver font-bold text-white";

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <nav className="glass-nav flex w-full items-center justify-between px-5 py-3 md:px-8">
        <div>
          <Link className="flex items-center gap-2" to="/">
            <BookOpen className="h-4 w-4 text-surface-tint" strokeWidth={1.7} />
            <p className="text-lg font-semibold tracking-tight">BookVault</p>
          </Link>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="rounded-md p-1 text-on-surface-variant transition-colors hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface-tint md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
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

      {isMenuOpen && (
        <div
          className="glass-nav absolute left-0 right-0 top-full z-20 mt-2 border border-white/10 px-5 py-4 shadow-xl md:hidden"
          id="mobile-navigation"
        >
          <ul className="space-y-2">
            <li>
              <Link
                className={`${mobileLinkBase} ${isActive("/") ? activeLink : ""}`.trim()}
                onClick={() => setIsMenuOpen(false)}
                to="/"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className={`${mobileLinkBase} ${isActive("/browse") ? activeLink : ""}`.trim()}
                onClick={() => setIsMenuOpen(false)}
                to="/browse"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                className={`${mobileLinkBase} ${isActive("/vault") ? activeLink : ""}`.trim()}
                onClick={() => setIsMenuOpen(false)}
                to="/vault"
              >
                My Vault
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
