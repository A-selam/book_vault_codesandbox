import { CirclePlus } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function HeroSection() {
  return (
    <section className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-on-surface-variant">
          Personal Library
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Welcome back, 👋.
        </h1>
      </div>

      <Link to="/browse">
        <button className="bg-gradient-primary inline-flex h-11 items-center gap-2 rounded-md px-5 text-sm font-medium text-on-primary transition-transform duration-300 hover:-translate-y-0.5">
          <CirclePlus size={16} />
          Add New Book
        </button>
      </Link>
    </section>
  );
}
