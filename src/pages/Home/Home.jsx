import Navbar from "../../components/layout/Navbar"
import heroImage from "../../assets/hero.jpg"

function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <Navbar />

      <main>
        <section className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
            <div className="max-w-xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                New season
              </p>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Everything you need, one tap away.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg">
                Discover thoughtfully selected pieces designed to bring
                simplicity, function, and style into your everyday life.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/shop"
                  className="bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  Shop collection
                </a>

                <a
                  href="/collections"
                  className="border border-neutral-300 px-7 py-3.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-950"
                >
                  Explore collections
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="min-h-[500px] overflow-hidden lg:min-h-[650px]">
            <img
              src={heroImage}
              alt="Featured Aurora collection"
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home