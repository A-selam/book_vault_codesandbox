import { create } from "zustand";
import { type Book, type BookStoreBook } from "../types/books";
import { persist } from "zustand/middleware";

type BookStore = {
  vault: BookStoreBook[];
};

type BookStoreActions = {
  addToVault: (book: Book) => void;
  removeFromVault: (id: string) => void;
  toggleRead: (id: string) => void;
};

type storeState = BookStore & BookStoreActions;

const useBookStore = create<storeState>()(
  persist(
    (set) => ({
      vault: [],

      addToVault: (book) =>
        set((state) => {
          if (!state.vault.some((b) => b.id === book.id)) {
            const newBook: BookStoreBook = { ...book, isRead: false };
            return { vault: [...state.vault, newBook] };
          }
          return state;
        }),

      removeFromVault: (id) =>
        set((state) => {
          if (state.vault.some((book) => book.id === id)) {
            return { vault: state.vault.filter((book) => book.id !== id) };
          }
          return state;
        }),

      toggleRead: (id) =>
        set((state) => {
          if (state.vault.some((book) => book.id === id)) {
            return {
              vault: state.vault.map((book) =>
                book.id === id ? { ...book, isRead: !book.isRead } : book,
              ),
            };
          }
          return state;
        }),
    }),
    {
      name: "book-store",
    },
  ),
);

export default useBookStore;
