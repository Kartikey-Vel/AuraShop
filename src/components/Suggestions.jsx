// Suggestions section — shows cards with reason and quick actions
function Suggestions({ suggestions = [], onAdd, onDismiss }) {
  if (!Array.isArray(suggestions) || suggestions.length === 0) return null;
  return (
  <div className="rounded-xl border border-primary-light bg-white p-4 dark:bg-surface-dark dark:border-primary-dark">
      <h3 className="mb-3 text-lg font-medium text-primary-dark dark:text-primary-light">
        💡 Suggested for You
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {suggestions.map((s, i) => (
          <li
            key={`${s.item || s}-${i}`}
            className="rounded-lg border border-indigo-100 bg-indigo-50/50 p-3 dark:border-fuchsia-700 dark:bg-fuchsia-700/30"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-semibold text-indigo-900 dark:text-fuchsia-100">
                  {typeof s === "string" ? s : s.item}
                </div>
                <p className="mt-0.5 text-xs text-fuchsia-700 dark:text-fuchsia-200">
                  {typeof s === "string" ? "Quick add" : s.reason}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onAdd?.(typeof s === "string" ? s : s.item)}
                  className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-400 px-3 py-1.5 text-xs font-medium text-white shadow-md hover:from-indigo-600 hover:via-fuchsia-600 hover:to-pink-500"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onDismiss?.(typeof s === "string" ? s : s.item)
                  }
                  className="rounded-full px-2 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-100 dark:text-fuchsia-300 dark:hover:bg-fuchsia-600"
                  title="Dismiss suggestion"
                >
                  Hide
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;
