import { Button } from "./ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Tools", href: "#features-section" },
    { label: "FAQ", href: "#faq-section" },
    { label: "Tutorials", href: "#tutorial-section" },
    { label: "Safety", href: "#safety-section" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Leaf className="w-6 h-6 text-green-600" />
            <span className="text-lg text-gray-900 hidden sm:block">Clean Inbox</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button size="sm" className="bg-green-600 hover:bg-green-700 mt-2 w-fit">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}