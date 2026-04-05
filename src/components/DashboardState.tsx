import { Sparkles, Telescope } from "lucide-react";
import useDashboardStats from "../hooks/useDashboardStats";

export function DashboardState() {
  const { totalBooks, totalRead, totalUnread } = useDashboardStats();

  return (
    <section className="grid gap-3 md:grid-cols-2">
      <article className="rounded-xl bg-surface-container-high p-5">
        <Sparkles className="text-surface-tint" size={16} strokeWidth={1.5} />
        <p className="mt-3 text-4xl font-semibold tracking-tight">
          {totalBooks}
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
          Total Books
        </p>
      </article>

      <article className="rounded-xl bg-surface-container-high p-5">
        <Telescope className="text-surface-tint" size={16} strokeWidth={1.5} />
        <p className="mt-3 text-4xl font-semibold tracking-tight">
          {totalRead}
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
          Marked Read
        </p>
        <p className="mt-1 text-xs text-on-surface-variant">
          {totalUnread} unread
        </p>
      </article>
    </section>
  );
}
