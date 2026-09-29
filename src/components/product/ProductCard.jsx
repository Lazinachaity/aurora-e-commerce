import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <Link to={`/shop/${product.id}`} className="block">
      <article>
        <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-neutral-400">
              Product image
            </div>
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-sm font-medium text-neutral-950">
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                {product.category}
              </p>
            </div>

            <p className="text-sm text-neutral-950">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default ProductCard