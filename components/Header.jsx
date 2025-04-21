import Link from "next/link";
import IconWithBadge from "./IconWithBadge";

export default function Header() {
    return (
        <header className="bg-black/30 backdrop-blur-md text-white px-6 py-4 flex items-center justify-between rounded-xl shadow-md">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#00F0FF] neon-text">logo</div>

            {/* Nav Links */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
                <Link href="/" className="hover:text-[#00F0FF] p-5 transition-colors duration-300">
                    Home
                </Link>
                <Link href="/shop" className="hover:text-[#00F0FF] p-5 transition-colors duration-300">
                    Shop
                </Link>
                <Link href="/collections" className="hover:text-[#00F0FF] p-5 transition-colors duration-300">
                    Collections
                </Link>
                <Link href="/about" className="hover:text-[#00F0FF] p-5 transition-colors duration-300">
                    About
                </Link>
                <Link href="/contact" className="hover:text-[#00F0FF] p-5 transition-colors duration-300">
                    Contact
                </Link>
            </nav>

            {/* Search + Icons */}
            <div className="flex items-center gap-6">
                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="bg-[#0A0A0F] border border-[#00F0FF] rounded-full px-4 py-2 text-sm w-56 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00F0FF] transition"
                    />
                    <span className="absolute right-3 top-2.5 text-[#00F0FF]">
                        <i className="ri-search-line"></i>
                    </span>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4 text-xl relative">
                    <IconWithBadge icon="ri-user-line" />
                    <IconWithBadge icon="ri-heart-line" count={3} />
                    <IconWithBadge icon="ri-shopping-cart-line" count={2} />
                </div>
            </div>
        </header>
    );
}