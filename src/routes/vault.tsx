/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, Link } from "@tanstack/react-router";
import { VaultBookRow } from "../components/vault/VaultBookRow";
import { VaultEmptyState } from "../components/vault/VaultEmptyState";
import { VaultHeader } from "../components/vault/VaultHeader";
import useVault from "../hooks/useVault";

export const Route = createFileRoute("/vault")({
  component: RouteComponent,
});

function RouteComponent() {
  const { vault, removeFromVault, toggleRead } = useVault();
  const isEmpty = vault.length === 0;

  if (isEmpty) {
    return (
      <section className="space-y-10">
        <VaultHeader totalBooks={0} />
        <VaultEmptyState />
      </section>
    );
  }

  return (
    <section className="space-y-7">
      <VaultHeader totalBooks={vault.length} />

      <div className="space-y-3">
        {vault.map((book) => (
          <VaultBookRow
            book={book}
            key={book.id}
            onRemove={removeFromVault}
            onToggleRead={toggleRead}
          />
        ))}
      </div>

      <div className="pt-5 text-center">
        <Link to="/browse">
          <button className="bg-gradient-primary inline-flex h-10 items-center rounded-md px-5 text-sm font-medium text-on-primary transition-transform duration-300 hover:-translate-y-0.5">
            + Add New Book
          </button>
        </Link>
      </div>
    </section>
  );
}
