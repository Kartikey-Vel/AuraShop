import Item from "./Item.jsx";
import { getCategoryFor, getIconForCategory } from "../utils/categoryIcons.js";

function groupByCategory(items) {
  const map = new Map();
  for (const it of items) {
    const cat = getCategoryFor(it.name);
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat).push(it);
  }
  // sort categories by name, items by name
  const cats = Array.from(map.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (const [, list] of cats)
    list.sort((a, b) => a.name.localeCompare(b.name));
  return cats;
}

function ShoppingList({ items = [], onInc, onDec, onDelete, onToggleBought }) {
  const groups = groupByCategory(items);
  return (
  <div className="rounded-xl border border-primary-light bg-white p-2 sm:p-3 dark:bg-surface-dark dark:border-primary-dark">
      <h2 className="mb-2 text-base sm:text-lg font-medium text-primary-dark dark:text-primary-light">
        Shopping list
      </h2>
      {items.length === 0 ? (
        <p className="text-sm text-gray-600 dark:text-slate-300">
          Your list is empty.
        </p>
      ) : (
        <div className="space-y-4">
          {groups.map(([cat, list]) => (
            <section key={cat} className="">
              <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-indigo-900 dark:text-fuchsia-100">
                <span aria-hidden>{getIconForCategory(cat)}</span>
                <span>{cat}</span>
              </h3>
              <ul className="space-y-2">
                {list.map((item) => (
                  <Item
                    key={item.id}
                    item={item}
                    onInc={onInc}
                    onDec={onDec}
                    onDelete={onDelete}
                    onToggleBought={onToggleBought}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
