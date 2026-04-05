import { Link } from "@tanstack/react-router";
import { ArrowRight, PackageOpen } from "lucide-react";

export function VaultEmptyState() {
  return (
    <div className="rounded-4xl border border-dashed border-outline-medium bg-surface-container-low p-10 md:p-16">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <span className="mb-6 rounded-full bg-surface-container-high p-6 text-on-surface-variant">
          <PackageOpen size={34} strokeWidth={1.4} />
        </span>
        <h2 className="text-4xl font-semibold tracking-tight">
          Your vault is empty
        </h2>
        <p className="mt-3 text-on-surface-variant">
          Time to start building your personal library.
        </p>

        <Link
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-white px-6 text-sm font-medium text-[#12131e] transition-opacity hover:opacity-90"
          to="/browse"
        >
          Browse Books
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
