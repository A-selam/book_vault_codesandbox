import { BookOpenText, Clock3, FlaskConical, Sparkles } from "lucide-react";

export function Collections() {
  const collections = [
    {
      id: "c1",
      title: "Systems Design",
      count: "24 Items",
      icon: BookOpenText,
    },
    { id: "c2", title: "Aesthetic Theory", count: "12 Items", icon: Sparkles },
    { id: "c3", title: "Ancient Texts", count: "8 Items", icon: Clock3 },
    {
      id: "c4",
      title: "Quantum Physics",
      count: "15 Items",
      icon: FlaskConical,
    },
  ];

  return (
    <section className="pt-4">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">
          Curated Collections
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection) => {
          const Icon = collection.icon;

          return (
            <article
              className="rounded-xl bg-surface-container-high p-5 transition-colors hover:bg-surface-container-highest"
              key={collection.id}
            >
              <Icon className="text-surface-tint" size={16} strokeWidth={1.5} />
              <h3 className="mt-16 text-lg font-semibold">
                {collection.title}
              </h3>
              <p className="text-sm text-on-surface-variant">
                {collection.count}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
