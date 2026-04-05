import { useMemo, useState } from "react";
import Books from "../data/mockBooks";
import useBookStore from "../store/useBookStore";

const useBrowse = (pageSize = 10) => {
  const vault = useBookStore((state) => state.vault);
  const addToVault = useBookStore((state) => state.addToVault);
  const [currentPage, setCurrentPage] = useState(1);

  const vaultBookIds = useMemo(
    () => new Set(vault.map((book) => book.id)),
    [vault],
  );

  const browseBooks = useMemo(
    () =>
      Books.map((book) => ({
        ...book,
        inVault: book.inVault || vaultBookIds.has(book.id),
      })),
    [vaultBookIds],
  );

  const totalPages = Math.max(1, Math.ceil(browseBooks.length / pageSize));

  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedBooks = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize;
    const end = start + pageSize;
    return browseBooks.slice(start, end);
  }, [browseBooks, pageSize, safeCurrentPage]);

  const goToPage = (page: number) => {
    const normalizedPage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(normalizedPage);
  };

  const nextPage = () => {
    goToPage(safeCurrentPage + 1);
  };

  const previousPage = () => {
    goToPage(safeCurrentPage - 1);
  };

  const hasNextPage = safeCurrentPage < totalPages;
  const hasPreviousPage = safeCurrentPage > 1;

  return {
    browseBooks,
    paginatedBooks,
    addToVault,
    currentPage: safeCurrentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    nextPage,
    previousPage,
  };
};

export default useBrowse;
