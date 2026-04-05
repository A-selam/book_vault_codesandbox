import { ChevronLeft, ChevronRight } from "lucide-react";

type BrowsePaginationProps = {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onGoToPage: (page: number) => void;
};

export function BrowsePagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onNextPage,
  onPreviousPage,
  onGoToPage,
}: BrowsePaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="flex items-center justify-center gap-2 border-t border-outline-soft pt-6">
      <button
        className="inline-flex items-center gap-1 px-2 py-1 text-xs uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:text-on-surface disabled:opacity-40"
        disabled={!hasPreviousPage}
        onClick={onPreviousPage}
        type="button"
      >
        <ChevronLeft size={14} />
        Previous
      </button>

      {pages.map((page) => (
        <button
          className={`h-8 w-8 rounded-sm text-sm ${
            page === currentPage
              ? "bg-surface-container-highest text-on-surface"
              : "text-on-surface-variant hover:bg-surface-container-high"
          }`}
          key={page}
          onClick={() => onGoToPage(page)}
          type="button"
        >
          {page}
        </button>
      ))}

      <button
        className="inline-flex items-center gap-1 px-2 py-1 text-xs uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:text-on-surface disabled:opacity-40"
        disabled={!hasNextPage}
        onClick={onNextPage}
        type="button"
      >
        Next
        <ChevronRight size={14} />
      </button>
    </nav>
  );
}
