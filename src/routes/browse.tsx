/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from "@tanstack/react-router";
import { BrowseBookCard } from "../components/browse/BrowseBookCard";
import { BrowseHeader } from "../components/browse/BrowseHeader";
import { BrowsePagination } from "../components/browse/BrowsePagination";
import useBrowse from "../hooks/useBrowse";

export const Route = createFileRoute("/browse")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    paginatedBooks,
    addToVault,
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    nextPage,
    previousPage,
  } = useBrowse(8);

  return (
    <section className="space-y-9">
      <BrowseHeader
        description="Explore curated literary treasures for your digital vault."
        title="Browse Collection"
      />

      <div className="grid gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {paginatedBooks.map((book) => (
          <BrowseBookCard book={book} key={book.id} onAddToVault={addToVault} />
        ))}
      </div>

      <BrowsePagination
        currentPage={currentPage}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        onGoToPage={goToPage}
        onNextPage={nextPage}
        onPreviousPage={previousPage}
        totalPages={totalPages}
      />
    </section>
  );
}
