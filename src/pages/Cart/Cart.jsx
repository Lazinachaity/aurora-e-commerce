import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext.jsx"
import { useState } from "react"

function Cart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart()

  const [removedItem, setRemovedItem] = useState(null)

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Your bag
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Your bag is empty.
        </h1>

        <p className="mt-4 text-base text-neutral-600">
          Add something you love and it will appear here.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-block bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          Continue shopping
        </Link>
      </main>
    )
  }

  return (
    <>
      {removedItem && (
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 border border-neutral-200 bg-white px-5 py-4 shadow-lg">
          <p className="text-sm text-neutral-700">
            {removedItem.name} removed from your bag.
          </p>

          <button
            type="button"
            onClick={() => {
              addToCart(removedItem, removedItem.quantity)
              setRemovedItem(null)
            }}
            className="text-sm font-medium text-neutral-950 underline underline-offset-4"
          >
            Undo
          </button>
        </div>
      )}

      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        <div className="border-b border-neutral-200 pb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Your bag
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Shopping Bag
          </h1>

          <p className="mt-4 text-base text-neutral-600">
            Review your selected products before checkout.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
          <section className="space-y-8">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="flex gap-6 border-b border-neutral-200 pb-8"
              >
                <div className="h-36 w-28 shrink-0 overflow-hidden bg-neutral-100 sm:h-44 sm:w-36">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-base font-medium text-neutral-950">
                        {item.name}
                      </h2>

                      <p className="mt-1 text-sm text-neutral-500">
                        {item.category}
                      </p>
                    </div>

                    <p className="text-sm text-neutral-950">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                    <div className="flex items-center border border-neutral-300">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="px-4 py-2.5 text-sm text-neutral-700 transition hover:text-neutral-950"
                      >
                        −
                      </button>

                      <span className="min-w-10 text-center text-sm">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        className="px-4 py-2.5 text-sm text-neutral-700 transition hover:text-neutral-950"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setRemovedItem(item)
                        removeFromCart(item.id)
                      }}
                      className="text-sm text-neutral-500 transition hover:text-neutral-950"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="h-fit border border-neutral-200 p-6 sm:p-8">
            <h2 className="text-lg font-medium text-neutral-950">
              Order summary
            </h2>

            <div className="mt-8 flex items-center justify-between text-sm">
              <span className="text-neutral-500">Subtotal</span>

              <span className="text-neutral-950">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-neutral-500">Shipping</span>

              <span className="text-neutral-500">
                Calculated at checkout
              </span>
            </div>

            <div className="mt-6 border-t border-neutral-200 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-medium text-neutral-950">
                  Total
                </span>

                <span className="text-lg font-medium text-neutral-950">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 w-full bg-neutral-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Checkout
            </button>

            <Link
              to="/shop"
              className="mt-3 block w-full border border-neutral-300 px-6 py-4 text-center text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      </main>
    </>
  )
}

export default Cart