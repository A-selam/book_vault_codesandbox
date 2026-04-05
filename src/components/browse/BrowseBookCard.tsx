import { CheckCircle2, ImageIcon } from "lucide-react";
import { type Book } from "../../types/books";

type BrowseBookCardProps = {
  book: Book;
  onAddToVault: (book: Book) => void;
};

export function BrowseBookCard({ book, onAddToVault }: BrowseBookCardProps) {
  return (
    <article>
      <div className="group relative overflow-hidden rounded-xl bg-surface-container-high">
        {book.image ? (
          <img
            alt={book.title}
            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            src={book.image}
          />
        ) : (
          <div className="flex h-72 items-center justify-center bg-surface-container-low text-on-surface-variant">
            <ImageIcon size={22} strokeWidth={1.5} />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
      </div>

      <h2 className="mt-3 text-lg font-semibold leading-tight">{book.title}</h2>
      <p className="mb-3 text-sm text-on-surface-variant">{book.author}</p>

      {book.inVault ? (
        <button
          className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-surface-container-high text-sm text-on-surface-variant"
          disabled
          type="button"
        >
          <CheckCircle2 size={14} />
          In Vault
        </button>
      ) : (
        <button
          className="h-10 w-full rounded-md bg-white text-sm font-medium text-[#0f101a] transition-opacity hover:opacity-90"
          onClick={() => onAddToVault(book)}
          type="button"
        >
          Add to Vault
        </button>
      )}
    </article>
  );
}
