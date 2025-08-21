import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight font-bold">eCell NSUT</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex px-5 space-x-12 font-bold mr-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
<div className="lg:hidden flex items-center">
  <button
    onClick={toggleNavbar}
    className="w-11 h-11 rounded-md hover:bg-neutral-800 transition flex items-center justify-center"
  >
    {mobileDrawerOpen ? (
      <X className="w-6 h-6" />   // icon size ~24px
    ) : (
      <Menu className="w-6 h-6" />
    )}
  </button>
</div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-20 bg-neutral-900 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-6 text-lg font-bold">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex space-x-6">
              <a
                href="#"
                className="py-2 px-4 border rounded-md hover:bg-neutral-800 transition"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:opacity-90 transition"
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
