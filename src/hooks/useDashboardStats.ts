import useBookStore from "../store/useBookStore";

export default function useDashboardStats() {
  const vault = useBookStore((state) => state.vault);

  const totalBooks = vault.length;
  const totalRead = vault.filter((book) => book.isRead).length;
  const totalUnread = totalBooks - totalRead;

  return { totalBooks, totalRead, totalUnread };
}
