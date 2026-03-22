import { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="stella-section-tight bg-stella-ice">
        <div className="stella-container text-center">
          <ScrollReveal>
            <span className="stella-label">Shop</span>
            <h1 className="stella-heading-xl text-foreground mt-4">The Collection</h1>
            <p className="stella-body mx-auto mt-4">
              Performance swimwear engineered for elite water polo athletes. Every suit is built to last, designed to stand out.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="stella-section bg-background">
        <div className="stella-container">
          {/* Category filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-display text-sm font-500 px-4 py-2 rounded-sm transition-all duration-200 active:scale-[0.97] ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-stella-ice text-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 60}>
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-stella-coral text-primary-foreground text-xs font-display font-500 px-3 py-1 rounded-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <p className="stella-label text-xs">{product.category}</p>
                    <h3 className="font-display font-600 text-foreground mt-1 group-hover:text-stella-coral transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">{product.tagline}</p>
                    <p className="font-display font-600 text-foreground mt-2 tabular-nums">${product.price}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-muted-foreground">No products in this category yet. More coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Shop;
