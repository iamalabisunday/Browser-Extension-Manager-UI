export default function ExtensionButton({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-fit h-10 p-4 font-medium rounded-4xl bg-[var(--color-background-soft)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] focus:bg-[var(--color-accent)] focus:text-[var(--color-background)] text-[var(--color-surface)] cursor-pointer flex justify-center items-center"
    >
      {name}
    </button>
  );
}
