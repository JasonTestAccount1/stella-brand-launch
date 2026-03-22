import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="stella-container stella-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display font-800 text-2xl tracking-[0.15em]">STELLA</span>
            <p className="mt-4 text-sm font-body font-300 opacity-70 leading-relaxed max-w-xs">
              Performance swimwear for female water athletes. Where strength meets femininity.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display font-600 text-sm tracking-wide mb-4">Shop</h4>
            <ul className="space-y-2">
              {["Competition", "Training", "Signature Collection", "Essentials"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-600 text-sm tracking-wide mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Sustainability", href: "/sustainability" },
                { label: "Community", href: "/community" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-600 text-sm tracking-wide mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity inline-flex items-center gap-2">
                  <Instagram size={14} /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:hello@stellaswim.com" className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity inline-flex items-center gap-2">
                  <Mail size={14} /> hello@stellaswim.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs font-body opacity-40">Newsletter coming soon</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body opacity-40">© 2026 STELLA. All rights reserved.</p>
          <div className="flex gap-6">
            {["Terms & Conditions", "Privacy Policy", "Shipping & Returns"].map((item) => (
              <span key={item} className="text-xs font-body opacity-40 hover:opacity-70 cursor-pointer transition-opacity">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
