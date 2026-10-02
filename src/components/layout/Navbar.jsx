import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext.jsx"

function Navbar() {
  const { cartCount } = useCart()

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-neutral-950"
        >
          Aurora
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            Shop
          </Link>

          <Link
            to="/collections"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            Collections
          </Link>

          <Link
            to="/about"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            Search
          </button>

          <Link
            to="/wishlist"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            Wishlist
          </Link>

          <Link
  to="/cart"
  aria-label={`Shopping bag with ${cartCount} items`}
  className="relative flex items-center text-neutral-900 transition hover:text-neutral-600"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 8.5h11l1 12h-13l1-12Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8.5V6a3 3 0 0 1 6 0v2.5"
    />
  </svg>

  {cartCount > 0 && (
    <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-neutral-950 px-1 text-[10px] font-medium leading-none text-white">
      {cartCount}
    </span>
  )}
</Link>

        </div>
      </div>
    </header>
  )
}

export default Navbar