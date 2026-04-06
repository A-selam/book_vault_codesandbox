import useBookStore from "../store/useBookStore";

export function useBookCategoryStat() {
  const vault = useBookStore((state) => state.vault);

  let Academic = 0,
    ScienceFiction = 0,
    Technology = 0,
    MysteryThriller = 0;

  vault.forEach((book) => {
    switch (book.category) {
      case "Academic":
        Academic++;
        break;
      case "Science Fiction":
        ScienceFiction++;
        break;
      case "Technology":
        Technology++;
        break;
      case "Mystery & Thriller":
        MysteryThriller++;
        break;
    }
  });

  return { Academic, ScienceFiction, Technology, MysteryThriller };
}
