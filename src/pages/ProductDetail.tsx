import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getProduct, getRelatedProducts } from "@/data/products";
import { Minus, Plus, ChevronRight } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id || "");
  const related = getRelatedProducts(id || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [qty, setQty] = useState(1);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <main className="pt-20 stella-section">
        <div className="stella-container text-center">
          <h1 className="stella-heading-lg text-foreground">Product not found</h1>
          <Button variant="stellaOutline" className="mt-6" asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="stella-container px-6 md:px-12 lg:px-24 pt-6">
        <nav className="flex items-center gap-1 text-xs font-body text-muted-foreground">
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <section className="stella-section-tight">
        <div className="stella-container">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <ScrollReveal direction="right">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-stella-ice relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-stella-coral text-primary-foreground text-xs font-display font-500 px-3 py-1 rounded-sm">
                    {product.badge}
                  </span>
                )}
              </div>
            </ScrollReveal>

            {/* Details */}
            <ScrollReveal direction="left">
              <div className="flex flex-col">
                <span className="stella-label">{product.category}</span>
                <h1 className="stella-heading-lg text-foreground mt-2">{product.name}</h1>
                <p className="font-body font-300 text-muted-foreground mt-1">{product.tagline}</p>
                <p className="font-display font-700 text-2xl text-foreground mt-4 tabular-nums">${product.price}</p>

                <p className="font-body font-300 text-foreground/80 mt-6 leading-relaxed">{product.description}</p>

                {/* Color */}
                <div className="mt-8">
                  <p className="font-display font-500 text-sm text-foreground mb-3">Colour</p>
                  <div className="flex gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`px-4 py-2 text-sm font-body rounded-sm border transition-all active:scale-[0.97] ${
                          selectedColor === c ? "border-foreground bg-stella-ice" : "border-border hover:border-foreground/30"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div className="mt-6">
                  <p className="font-display font-500 text-sm text-foreground mb-3">Size</p>
                  <div className="flex gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`w-12 h-12 text-sm font-display font-500 rounded-sm border transition-all active:scale-[0.97] ${
                          selectedSize === s ? "border-foreground bg-stella-ice" : "border-border hover:border-foreground/30"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-6">
                  <p className="font-display font-500 text-sm text-foreground mb-3">Quantity</p>
                  <div className="inline-flex items-center border border-border rounded-sm">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-muted transition-colors active:scale-95"><Minus size={14} /></button>
                    <span className="px-5 font-display font-500 text-sm tabular-nums">{qty}</span>
                    <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-muted transition-colors active:scale-95"><Plus size={14} /></button>
                  </div>
                </div>

                {/* Add to cart */}
                <Button variant="stella" size="xl" className="mt-8 w-full md:w-auto">
                  Add to Cart — ${(product.price * qty).toFixed(0)}
                </Button>

                {/* Benefits */}
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="font-display font-600 text-sm text-foreground mb-3">Performance Benefits</p>
                  <ul className="space-y-2">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm font-body text-foreground/70">
                        <span className="w-1 h-1 bg-stella-coral rounded-full flex-shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials */}
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  <div>
                    <p className="font-display font-600 text-sm text-foreground">Materials & Sustainability</p>
                    <p className="font-body font-300 text-sm text-muted-foreground mt-1">{product.materials}</p>
                  </div>
                  <div>
                    <p className="font-display font-600 text-sm text-foreground">Fit</p>
                    <p className="font-body font-300 text-sm text-muted-foreground mt-1">{product.fit}</p>
                  </div>
                  <div>
                    <p className="font-display font-600 text-sm text-foreground">Care</p>
                    <p className="font-body font-300 text-sm text-muted-foreground mt-1">{product.care}</p>
                  </div>
                  <div>
                    <p className="font-display font-600 text-sm text-foreground">Shipping & Returns</p>
                    <p className="font-body font-300 text-sm text-muted-foreground mt-1">Free shipping on orders over $100. 30-day returns on unworn items. Full details on our FAQ page.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="stella-section bg-stella-ice">
          <div className="stella-container">
            <ScrollReveal>
              <h2 className="stella-heading-md text-foreground mb-8">You May Also Like</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 80}>
                  <Link to={`/product/${p.id}`} className="group block">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="font-display font-600 text-foreground mt-3 group-hover:text-stella-coral transition-colors">{p.name}</h3>
                    <p className="font-display font-500 text-sm text-foreground mt-1 tabular-nums">${p.price}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
