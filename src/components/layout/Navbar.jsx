function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="/"
          className="text-2xl font-semibold tracking-tight text-neutral-950"
        >
          Aurora
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            Home
          </a>

          <a
            href="/shop"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            Shop
          </a>

          <a
            href="/collections"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            Collections
          </a>

          <a
            href="/about"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            About
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <button className="text-sm text-neutral-700 transition hover:text-neutral-950">
            Search
          </button>

          <a
            href="/wishlist"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            Wishlist
          </a>

          <a
            href="/cart"
            className="text-sm text-neutral-700 transition hover:text-neutral-950"
          >
            Bag
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar