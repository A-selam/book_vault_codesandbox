import { CheckCircle2, Eye, ImageIcon, Trash2 } from "lucide-react";
import { type BookStoreBook } from "../../types/books";

type VaultBookRowProps = {
  book: BookStoreBook;
  onToggleRead: (id: string) => void;
  onRemove: (id: string) => void;
};

export function VaultBookRow({
  book,
  onToggleRead,
  onRemove,
}: VaultBookRowProps) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-xl bg-surface-container-high p-4 md:p-5">
      <div className="flex min-w-0 items-center gap-4">
        {book.image ? (
          <img
            alt={book.title}
            className="h-20 w-14 rounded-md object-cover md:h-24 md:w-16"
            src={book.image}
          />
        ) : (
          <div className="flex h-20 w-14 items-center justify-center rounded-md bg-surface-container-low text-on-surface-variant md:h-24 md:w-16">
            <ImageIcon size={16} strokeWidth={1.5} />
          </div>
        )}

        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold">{book.title}</h2>
          <p className="text-sm text-on-surface-variant">{book.author}</p>
          {book.isRead ? (
            <span className="mt-2 inline-flex rounded-sm bg-emerald-500/15 px-2 py-0.5 text-xs uppercase tracking-[0.14em] text-emerald-300">
              Read
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <button
          className="rounded-md p-2 text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-surface-tint"
          onClick={() => onToggleRead(book.id)}
          title="Toggle read"
          type="button"
        >
          {book.isRead ? (
            <CheckCircle2 size={16} strokeWidth={1.6} />
          ) : (
            <Eye size={16} strokeWidth={1.6} />
          )}
        </button>

        <button
          className="rounded-md p-2 text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-red-300"
          onClick={() => onRemove(book.id)}
          title="Remove book"
          type="button"
        >
          <Trash2 size={16} strokeWidth={1.6} />
        </button>
      </div>
    </article>
  );
}
