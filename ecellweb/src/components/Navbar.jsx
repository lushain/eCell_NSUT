import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileDrawerOpen]);

  // Determine if a nav href is an internal route (starts with /) vs a hash link
  const isInternalRoute = (href) => href.startsWith("/") && !href.startsWith("/#");

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="eCell NSUT logo" />
            <span className="text-xl tracking-tight font-bold text-white">eCell NSUT</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex px-5 space-x-12 font-bold">
            {navItems.map((item, index) => (
              <li key={index}>
                {isInternalRoute(item.href) ? (
                  <Link
                    to={item.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              aria-label={mobileDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
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
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Backdrop — click to close */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileDrawerOpen(false)}
            />

            {/* Close button */}
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={toggleNavbar}
                aria-label="Close navigation menu"
                className="w-11 h-11 rounded-md hover:bg-neutral-800 transition-colors duration-200 flex items-center justify-center text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div
              className="relative flex flex-col p-5 items-center rounded-3xl w-full justify-center h-fit translate-y-[70px] px-4 z-10"
              style={{
                backgroundColor: "rgba(26, 26, 26, 0.95)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <ul className="space-y-6 text-center">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {isInternalRoute(item.href) ? (
                      <Link
                        to={item.href}
                        onClick={() => setMobileDrawerOpen(false)}
                        className="text-xl font-bold text-white hover:text-orange-500 transition-colors duration-200 block py-2"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMobileDrawerOpen(false)}
                        className="text-xl font-bold text-white hover:text-orange-500 transition-colors duration-200 block py-2"
                      >
                        {item.label}
                      </a>
                    )}
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