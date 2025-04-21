import Link from "next/link";

export default function Home() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://public.readdy.ai/ai/img_res/1cd20f210a7471c9605fadedb9502475.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">The Future of</span>
              <span className="gradient-text text-5xl md:text-7xl">
                Shopping
              </span>
              <span className="block">Is Here</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
              Experience next-generation e-commerce with our futuristic
              platform. Discover products that define tomorrow, today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop">
                <button className="btn-glow bg-[#00F0FF] text-black px-8 py-3 rounded-button font-medium transition hover:brightness-125">
                  Shop Now
                </button>
              </Link>
              <Link href="/collections">
                <button className="btn-outline-glow border border-[#00F0FF] text-[#00F0FF] px-8 py-3 rounded-button font-medium transition hover:bg-[#00F0FF]/10 hover:brightness-150">
                  Explore AR
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
              <img
                src="https://public.readdy.ai/ai/img_res/a8dc01dfcfc98e07358a749458fa22b7.jpg"
                alt="Futuristic Headphones"
                className="relative z-10 max-w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
