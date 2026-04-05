type VaultHeaderProps = {
  totalBooks: number;
};

export function VaultHeader({ totalBooks }: VaultHeaderProps) {
  return (
    <header className="flex items-end justify-between">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-on-surface-variant">
          Personal Collection
        </p>
        <h1 className="text-5xl font-semibold tracking-tight">My Vault</h1>
      </div>

      <span className="status-terminal px-4 py-2">
        Total Books {totalBooks}
      </span>
    </header>
  );
}
