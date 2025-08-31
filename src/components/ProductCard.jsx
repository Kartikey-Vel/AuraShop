function ProductCard({ product, onAdd }) {
  return (
  <div className="rounded-lg border border-primary-light bg-white p-3 shadow-sm dark:bg-surface-dark dark:border-primary-dark">
      <div className="flex gap-3">
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-primary-dark truncate dark:text-primary-light">
            {product.name}
          </div>
          <div className="text-xs text-gray-600 dark:text-slate-300">
            {product.brand} • {product.size}
          </div>
          <div className="mt-1 font-medium text-accent dark:text-accent-light">
            ₹{product.price}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button
          type="button"
          onClick={() => onAdd?.(product)}
          className="w-full rounded-md bg-gradient-to-r from-emerald-500 via-amber-400 to-yellow-300 px-3 py-1.5 text-sm font-medium text-white shadow-md hover:from-emerald-600 hover:via-amber-500 hover:to-yellow-400"
        >
          Add to List
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
