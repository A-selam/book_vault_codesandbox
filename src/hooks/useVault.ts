import useBookStore from "../store/useBookStore";

export default function useVault() {
  const vault = useBookStore((state) => state.vault);
  const addToVault = useBookStore((state) => state.addToVault);
  const removeFromVault = useBookStore((state) => state.removeFromVault);
  const toggleRead = useBookStore((state) => state.toggleRead);

  return { vault, addToVault, removeFromVault, toggleRead };
}
