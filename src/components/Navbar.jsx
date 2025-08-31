function Navbar({
  lang,
  onLangChange,
  languages,
  fbOk,
  showFbPanel,
  setShowFbPanel,
  onRunFirestoreCheck,
  isDark,
  onToggleTheme,
}) {
  return (
  <header className="border-b border-primary-light bg-white dark:bg-surface-dark dark:border-primary-dark">
      <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between gap-4 relative">
        <div className="flex-1 flex justify-center">
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-primary-dark dark:text-primary-light">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L7.5 14.25m0 0A2.25 2.25 0 0 0 9.75 16.5h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5A2.25 2.25 0 0 0 17.25 4.5h-11.1m1.35 9.75h10.5" />
              </svg>
            </span>
            AuraShop
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="lang" className="sr-only">
            Language
          </label>
          <select
            id="lang"
            value={lang}
            onChange={(e) => onLangChange(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
          >
            {languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
            title="Toggle theme"
          >
            <span className="text-lg" aria-hidden="true">
              {isDark ? "🌙" : "☀️"}
            </span>
            <span className="sr-only">Toggle theme</span>
          </button>

          <button
            type="button"
            aria-label="Firebase status"
            title={
              fbOk === null
                ? "Checking Firebase…"
                : fbOk
                ? "Firebase connected"
                : "Firebase error"
            }
            onClick={() => setShowFbPanel((v) => !v)}
            className="relative inline-flex items-center justify-center h-7 w-7 rounded-full border border-gray-200 bg-white hover:shadow-sm dark:bg-slate-800 dark:border-slate-700"
          >
            <span
              className={`inline-block h-2.5 w-2.5 rounded-full ${
                fbOk === null
                  ? "bg-gray-300"
                  : fbOk
                  ? "bg-emerald-500"
                  : "bg-red-500"
              }`}
            />
          </button>

          {showFbPanel && (
            <div
              id="fb-panel"
              className="absolute right-4 top-full mt-2 w-64 rounded-lg border border-emerald-100 bg-white shadow-md p-3 z-50 dark:bg-slate-800 dark:border-slate-700"
              role="dialog"
              aria-label="Firebase connection"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`inline-block h-2.5 w-2.5 rounded-full ${
                    fbOk === null
                      ? "bg-gray-300"
                      : fbOk
                      ? "bg-emerald-500"
                      : "bg-red-500"
                  }`}
                />
                <span className="text-sm text-gray-800 dark:text-slate-200">
                  {fbOk === null
                    ? "Checking Firebase…"
                    : fbOk
                    ? "Firebase connected"
                    : "Firebase error"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={onRunFirestoreCheck}
                  className="text-xs font-medium text-emerald-700 hover:text-emerald-800 underline dark:text-emerald-300"
                >
                  Check now
                </button>
                <button
                  type="button"
                  onClick={() => setShowFbPanel(false)}
                  className="text-xs text-gray-600 hover:text-gray-800 dark:text-slate-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
  <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-amber-300 to-yellow-200" />
    </header>
  );
}

export default Navbar;
