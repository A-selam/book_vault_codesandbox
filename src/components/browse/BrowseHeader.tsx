type BrowseHeaderProps = {
  title: string;
  description: string;
};

export function BrowseHeader({ title, description }: BrowseHeaderProps) {
  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="mt-2 text-on-surface-variant">{description}</p>
    </div>
  );
}
