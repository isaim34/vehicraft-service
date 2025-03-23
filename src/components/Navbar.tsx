
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Services", "How It Works", "For Mechanics", "Subscription Plans"];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 glass-effect"
          : "py-5 bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">AutoProNow</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <Button size="sm">Book A Service</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 right-0 py-4 animate-fade-down">
          <Container>
            <ul className="flex flex-col space-y-4 mb-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="w-full">Book A Service</Button>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;

