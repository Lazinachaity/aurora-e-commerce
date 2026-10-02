import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import products from "../../data/product.js"
import { useCart } from "../../context/CartContext.jsx"

function ProductDetails() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-neutral-950">
            Product not found
          </h1>

          <Link
            to="/shop"
            className="mt-6 inline-block bg-neutral-950 px-6 py-3 text-sm font-medium text-white"
          >
            Back to shop
          </Link>
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12 lg:py-20">
        <Link
          to="/shop"
          className="text-sm text-neutral-500 transition hover:text-neutral-950"
        >
          Back to shop
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`aspect-[4/5] overflow-hidden bg-neutral-100 ${
                  selectedImage === index
                    ? "ring-1 ring-neutral-950"
                    : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-xl text-neutral-950">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-8 max-w-lg text-base leading-7 text-neutral-600">
              {product.description}
            </p>

            <div className="mt-10 border-t border-neutral-200 pt-8">
              <div className="mb-6">
                <p className="mb-3 text-sm font-medium text-neutral-950">
                  Quantity
                </p>

                <div className="flex w-fit items-center border border-neutral-300">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) => Math.max(1, current - 1))
                    }
                    className="px-4 py-3 text-sm text-neutral-700 transition hover:text-neutral-950"
                  >
                    −
                  </button>

                  <span className="min-w-12 text-center text-sm">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) => current + 1)
                    }
                    className="px-4 py-3 text-sm text-neutral-700 transition hover:text-neutral-950"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  addToCart(product, quantity)
                  setIsAdded(true)

                  setTimeout(() => {
                    setIsAdded(false)
                  }, 1500)
                }}
                className="w-full bg-neutral-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                {isAdded ? "Added to bag" : "Add to bag"}
              </button>

              <button
                type="button"
                className="mt-3 w-full border border-neutral-300 px-6 py-4 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
              >
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetails