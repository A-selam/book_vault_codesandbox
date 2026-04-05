interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  inVault: boolean;
}

type BookStoreBook = Book & {
  isRead: boolean;
};

export type { Book, BookStoreBook };
