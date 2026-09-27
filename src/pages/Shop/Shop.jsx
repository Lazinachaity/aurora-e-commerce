import { useState } from "react"
import ProductCard from "../../components/product/ProductCard"
import products from "../../data/product.js"

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortOption, setSortOption] = useState("Featured")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["All", "Home", "Lifestyle", "Tech"]

  let filteredProducts =
    selectedCategory === "All"
      ? [...products]
      : products.filter((product) => product.category === selectedCategory)

  if (searchQuery.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  if (sortOption === "Price: Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price)
  }

  if (sortOption === "Price: High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <main className="mx-auto max-w-7xl px-6 py-16">

        {/* Shop Header */}
        <div className="border-b border-neutral-200 pb-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Shop
              </p>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Everyday pieces, thoughtfully selected.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                Explore our latest collection of products designed around
                simplicity, function, and everyday use.
              </p>
            </div>

            {/* Search */}
            <div className="w-full md:w-72">
              <label
                htmlFor="product-search"
                className="mb-2 block text-sm font-medium text-neutral-950"
              >
                Search
              </label>

              <input
                id="product-search"
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search products"
                className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-700 outline-none placeholder:text-neutral-400 focus:border-neutral-950"
              />
            </div>
          </div>

          <div className="mt-8 text-sm text-neutral-500">
            {filteredProducts.length} products
          </div>
        </div>

        {/* Shop Content */}
        <div className="mt-10 flex flex-col gap-10 lg:flex-row">

          {/* Filters */}
          <aside className="w-full shrink-0 lg:w-56">
            <div>
              <p className="mb-4 text-sm font-medium text-neutral-950">
                Categories
              </p>

              <div className="space-y-3 text-sm">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block transition ${
                      selectedCategory === category
                        ? "font-medium text-neutral-950"
                        : "text-neutral-500 hover:text-neutral-950"
                    }`}
                  >
                    {category === "All" ? "All products" : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="mt-10 border-t border-neutral-200 pt-8">
              <p className="mb-4 text-sm font-medium text-neutral-950">
                Sort by
              </p>

              <select
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
                className="w-full border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-700 outline-none focus:border-neutral-950"
              >
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </aside>

          {/* Products */}
          <section className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-64 items-center justify-center border border-neutral-200">
                <p className="text-sm text-neutral-500">
                  No products found.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

export default Shop