import { BookOpenText, Clock3, FlaskConical, Sparkles } from "lucide-react";
import { useBookCategoryStat } from "../hooks/useBookCategoryState";

export function Collections() {
  const { Academic, ScienceFiction, Technology, MysteryThriller } =
    useBookCategoryStat();

  const categoryDetails = [
    { title: "Academic", count: Academic, icon: BookOpenText },
    { title: "Science Fiction", count: ScienceFiction, icon: Sparkles },
    { title: "Technology", count: Technology, icon: FlaskConical },
    { title: "Mystery & Thriller", count: MysteryThriller, icon: Clock3 },
  ];

  return (
    <section className="pt-4">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">
          Curated Collections
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {categoryDetails.map((category) => {
          const Icon = category.icon;

          return (
            <article
              className="rounded-xl bg-surface-container-high p-5 transition-colors hover:bg-surface-container-highest"
              key={category.title}
            >
              <Icon className="text-surface-tint" size={16} strokeWidth={1.5} />
              <h3 className="mt-16 text-lg font-semibold">{category.title}</h3>
              <p className="text-sm text-on-surface-variant">
                {category.count}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
