import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X, Heart, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      {/* Header/Navigation */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu toggle */}
            <button 
              className="lg:hidden text-gray-800" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Logo */}
            <div className="text-2xl font-semibold text-gray-800">Decor Haven</div>
            
            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-amber-600 font-medium">Home</a>
              <a href="#" className="text-gray-800 hover:text-amber-600 font-medium">Shop</a>
              <a href="#" className="text-gray-800 hover:text-amber-600 font-medium">Collections</a>
              <a href="#" className="text-gray-800 hover:text-amber-600 font-medium">New Arrivals</a>
              <a href="#" className="text-gray-800 hover:text-amber-600 font-medium">About</a>
            </nav>
            
            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-800 hover:text-amber-600">
                <Search size={20} />
              </button>
              <button className="text-gray-800 hover:text-amber-600">
                <Heart size={20} />
              </button>
              <button className="text-gray-800 hover:text-amber-600 relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                  2
                </span>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-2`}>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-800 hover:text-amber-600 font-medium py-1">Home</a>
              <a href="#" className="text-gray-800 hover:text-amber-600 font-medium py-1">Shop</a>
              <a href="#" className="text-gray-800 hover:text-amber-600 font-medium py-1">Collections</a>
              <a href="#" className="text-gray-800 hover:text-amber-600 font-medium py-1">New Arrivals</a>
              <a href="#" className="text-gray-800 hover:text-amber-600 font-medium py-1">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 lg:pt-0 relative bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-screen lg:min-h-0 lg:h-screen lg:max-h-[800px]">
            <div className="lg:w-1/2 py-16 lg:py-24">
              <h1 className="text-4xl lg:text-6xl font-light mb-6 leading-tight">
                Transform Your Space <br />
                <span className="font-semibold">With Elegant Decor</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Discover our curated collection of handcrafted decorative items that 
                add character and style to any space.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-amber-700 text-white font-medium rounded hover:bg-amber-800 transition">
                  Shop Now
                </button>
                <button className="px-8 py-3 border border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-100 transition">
                  Explore Collections
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-96 lg:h-full">
              <img 
                src="./public/assets/image.png" 
                alt="Featured decoration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 right-8 bg-white p-6 shadow-lg max-w-xs">
                <h3 className="text-xl font-medium mb-2">Summer Collection 2025</h3>
                <p className="text-gray-600 mb-4">Natural materials and earthy tones to bring the outdoors in.</p>
                <a href="#" className="text-amber-700 font-medium flex items-center hover:text-amber-900">
                  View Collection <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}