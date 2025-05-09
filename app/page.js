import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <img className="main-background" src="https://public.readdy.ai/ai/img_res/1cd20f210a7471c9605fadedb9502475.jpg"
            alt="" />
        <div className="description">
            <h1>The Future of</h1>
            <h1 className="shopping-text">Shopping</h1>
            <h1>Is Here</h1>
            <p>Experience next-generation e-commerce with our futuristic platform. Discover products that define
                tomorrow, today.
            </p>
            <a href="/shop" className="cyan-button">Shop Now</a>
            <a href="/explore" className="explore-button">Explore AR</a>
        </div>
        <div className="item-preview">
            <img src="https://public.readdy.ai/ai/img_res/a8dc01dfcfc98e07358a749458fa22b7.jpg"
                alt="Futuristic Headphones" />
        </div>
    </main>
  );
}
