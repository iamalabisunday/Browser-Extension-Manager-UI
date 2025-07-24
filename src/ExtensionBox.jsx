import React from "react";

export default function ExtensionBox({
  id,
  icon,
  title,
  paragraph,
  active,
  toggleActive,
  removeExtension,
}) {
  return (
    <section className="w-full bg-[var(--color-background-alt)] p-4 flex flex-col gap-10 rounded-2xl justify-start items-start">
      {/* Header */}
      <article className="w-fit flex items-start gap-4">
        <img src={icon} alt="icon" className="w-12 h-12" />
        <section className="flex flex-col gap-1">
          <p className="text-xl font-bold text-[var(--color-surface)] ">
            {title}
          </p>
          <p className="text-sm text-[var(--color-text)]">{paragraph}</p>
        </section>
      </article>

      {/* Footer Actions */}
      <section className="flex justify-between items-center w-full">
        <button
          onClick={() => removeExtension(id)}
          className="px-4 py-2 text-sm border-2 rounded-3xl border-[var(--color-text-muted)] cursor-pointer hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] text-[var(--color-surface)] "
        >
          Remove
        </button>

        <div
          onClick={() => toggleActive(id)}
          className="cursor-pointer text-4xl"
        >
          {active ? (
            <i className="fa-solid fa-toggle-on text-[var(--color-accent)]"></i>
          ) : (
            <i className="fa-solid fa-toggle-off text-[var(--color-text-muted)]"></i>
          )}
        </div>
      </section>
    </section>
  );
}
