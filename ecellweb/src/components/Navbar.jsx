import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // aligns to top of viewport
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight font-bold text-white">eCell NSUT</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex px-5 space-x-12 font-bold">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex space-x-4">
            
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="w-11 h-11 rounded-md hover:bg-neutral-800 transition-colors duration-200 flex items-center justify-center text-neutral-300 hover:text-white"
            >
              {mobileDrawerOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-40 h-content lg:hidden">
            {/* Close button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleNavbar}
                className="w-11 h-11 rounded-md hover:bg-neutral-800 transition-colors duration-200 flex items-center justify-center text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div style={{
    backgroundColor: "rgba(26, 26, 26, 1)", // gray with opacity
    backdropFilter: "blur(20px)",                // equivalent to Tailwind's blur-lg
    WebkitBackdropFilter: "blur(20px)",          // Safari support
}} className="flex flex-col bg-[rgb(119, 119, 119)] p-5 backdrop-blur-lg align-middle items-center rounded-3xl w-full justify-center h-fit translate-y-[70px] px-4">
              <ul className="space-y-6 text-center ">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className="text-xl font-bold text-white hover:text-orange-500 transition-colors duration-200 block py-2"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;