type BookCategory =
  | "Academic"
  | "Science Fiction"
  | "Technology"
  | "Mystery & Thriller";

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  inVault: boolean;
  category: BookCategory;
}

type BookStoreBook = Book & {
  isRead: boolean;
};

export type { Book, BookStoreBook, BookCategory };
