"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Home } from "lucide-react";
import Footer from "../components/Footer";
import { Button } from "@headlessui/react";

export default function ProductDetailsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const products = [
    {
      id: 1,
      name: "Glansa Sunscreen",
      image: "/glansa/GLANSA-SUNSCREEN.webp",
      description: `Glansa Aqua Sunscreen

Ingredients:
● UV Filters: Suncate DE, Titanium Dioxide – Provides broad-spectrum sun protection.
● Multivitamins & Antioxidants: Kakadu Plum Extract, Vitamin E, Pro-Vitamin B5 (Dex-panthenol).
● 8-Molecular-Weight Hyaluronic Acid, Niacinamide – Deeply hydrates and strengthens the skin barrier.
● Free from parabens, sulfates, and artificial fragrances.

Hero Ingredients:
● Kakadu Plum Extract – Rich in Vitamin C to brighten and protect skin.
● Vitamin E & B5 – Hydrates and reduces inflammation.
● Titanium Dioxide – Sun protection and anti-inflammatory.

How It Works:
● Protects for up to 6 hours from UVA/UVB.
● Antioxidants prevent environmental damage.

How to Use:
● Apply 15–20 min before sun exposure. Reapply every 6 hrs or after swimming/sweating.

Key Benefits:
● SPF 50+ | PA++++ | Ultra-light | No white cast | Hydrating
● Anti-aging, pollution shield, ISO/FDA approved, cruelty-free.

For All Skin Types | Dermatologist Approved | Made for Indian Summers`,
    },
    {
      id: 2,
      name: "Gluta Neo Tablets",
      image: "/glansa/gluta.png",
      description: `Glutaneo Tablet is a powerful antioxidant formulation that combats oxidative stress at the cellular level, caused by both internal metabolic processes and external environmental aggressors like UV radiation and pollution. 
Enriched with Glutathione, a master antioxidant, it helps detoxify the body, brighten the skin tone, and reduce pigmentation. 
Combined with Vitamin C, it enhances collagen synthesis, supports immune function, and boosts glutathione activity, resulting in healthier, more radiant skin from within.

Active ingredients: 

Glutathione, Vitamin C, N- Acetyl cysteine, ALA (Alpha Lipoic Acid).

Hero Ingredients:  Glutathione, N- Acetyl cysteine

Direction of use: 1  tablet twice per day after meals as directed by the doctor.

Benefits: 
Anti- oxidant 
Improves the skin tone and tanning
Helps reduce the pigmentation.
Improves collagen synthesis and thus improves the early signs of aging.
Soothes inflammation that can trigger pigmentation and aging.
Helps in liver detox, neutralizing toxins
Promotes cellular regeneration and healing.
`,
    },
    {
      id: 3,
      name: "Face Wash",
      image: "/glansa/GLANSA-NIGHTSERUM.webp",
      description: `The facewash is creamy in its consistency enriched with mini globules, this creamy facewash provides deep cleansing while its special active ingredients help improve blemishes and skin tone too.

Actives:  Glutathione, Kojic acid, Niacinamide, Salicylic acid, Ascorbic acid, Lactic acid, Glycolic acid, Arbutin and Licorice.
The ingredients work in synergy and provide instant glow and radiance to the skin leaving the skin soft, supple and dewy.

Suitable for all skin types. 
Direction of use: Twice per day 
Benefits: Glow , radiance , shine , brightness, detanning,pigmentation and oil control.`,
    },
  ];

  return (
    <main className="min-h-screen bg-[#1A132F] text-white px-4 sm:px-8 pt-28 pb-16">
      {/* Navbar */}
      <header className="fixed top-4 left-0 right-0 z-50">
        <div className="bg-[#1A132F] max-w-7xl mx-auto rounded-3xl shadow-2xl px-6 sm:px-10 py-4 flex items-center justify-between border border-[#7142d2]/30 backdrop-blur-lg">
          <div className="text-xl font-extrabold text-white tracking-tight">
            GlansaAV
          </div>
          <a
            href="/"
            className="flex items-center gap-2 hover:text-white transition"
            aria-label="Home"
            title="Home"
          >
            <Home className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Products */}
      <section
        id="products"
        className="max-w-7xl mx-auto mt-8 px-2 sm:px-0"
        aria-label="Products"
      >
        <h1
          className="text-center text-4xl md:text-5xl font-extrabold mb-20 tracking-tight"
          data-aos="fade-down"
        >
          Our Premium Products
        </h1>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 place-items-stretch">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

            <footer className="relative z-10 mt-24 pt-12 pb-8 border-t border-purple-900 bg-gradient-to-t from-black via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-purple-300 text-sm">
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Glansa AV Essentials</h3>
            <p>Skincare powered by science, backed by trust.</p>
          </div>
          <div>

          </div>

        </div>
        <div className="mt-10 text-center text-purple-500 text-xs">
          &copy; {new Date().getFullYear()} Glansa AV Essentials. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function ProductCard({ product }) {
  const [showMore, setShowMore] = useState(false);
  const maxLength = 380;

  const toggleDescription = () => setShowMore(!showMore);

  const showReadMore = product.description.length > maxLength;
  const displayedDescription =
    showReadMore && !showMore
      ? product.description.slice(0, maxLength) + "..."
      : product.description;

  function formatDescription(text) {
    const parts = text.split(/●\s*/).filter(Boolean);
    let intro = null;
    let bullets = [];

    if (parts.length === 1) {
      intro = parts[0];
    } else {
      intro = parts[0];
      bullets = parts.slice(1);
    }

    return (
      <>
        {intro && (
          <p className="mb-4 whitespace-pre-line text-purple-300 text-sm leading-relaxed font-sans">
            {intro.trim()}
          </p>
        )}
        {bullets.length > 0 && (
          <ul className="list-disc list-inside text-purple-300 text-sm leading-relaxed space-y-2 font-sans">
            {bullets.map((item, i) => (
              <li key={i}>{item.trim()}</li>
            ))}
          </ul>
        )}
      </>
    );
  }

  return (
    <article
      data-aos="zoom-in-up"
      className="
        flex flex-col justify-between bg-[#241C4A] rounded-2xl border border-[#7142d2]/40 p-6 shadow-lg
        transform transition-all duration-700 ease-in-out will-change-transform will-change-filter
        hover:scale-[1.05] hover:brightness-110
        max-w-sm w-full
        cursor-pointer
      "
    >
      {/* Image */}
      <div
        className="
          relative w-full h-64 bg-[#3a2c74] rounded-xl overflow-hidden shadow-md mb-6 flex items-center justify-center
          transition-transform duration-700 ease-in-out will-change-transform
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className={`object-contain w-full h-full ${
            product.id === 1 ? "max-h-56" : "max-h-64"
          }`}
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold mb-3 text-center">{product.name}</h2>

      {/* Description */}
      <div className="flex-grow mb-6">
        {showReadMore && !showMore ? (
          <p className="text-left text-sm text-purple-300 leading-relaxed whitespace-pre-line font-sans">
            {displayedDescription}
          </p>
        ) : (
          formatDescription(product.description)
        )}

        {showReadMore && (
          <button
            onClick={toggleDescription}
            className="mt-3 text-[#a77fff] text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#7142d2] transition"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Buy Button */}
      <div className="flex justify-center">
        <a
          href="https://wa.me/+918928454003"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Button
            className="bg-[#7142d2] hover:bg-gradient-to-r from-[#7142d2] to-[#a88bfa] text-white text-base px-6 py-3 rounded-full transition-all duration-300 ease-out shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            variant="outline"
          >
            Order Now
          </Button>
        </a>
      </div>
    </article>
  );
}
