export default function ExtensionButton({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-fit h-10 p-4 font-medium rounded-4xl bg-[var(--color-background-alt)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-border)] focus:bg-[var(--color-accent)] focus:text-[var(--color-background)] cursor-pointer flex justify-center items-center"
    >
      {name}
    </button>
  );
}
