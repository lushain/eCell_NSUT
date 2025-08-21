<<<<<<< HEAD
import eCellLogo from '../assets/Ecell.jpg';

const Navbar = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
                      src={eCellLogo} 
                      alt="E-Summit '25 Official Logo" 
                      className="max-w-xs md:max-w-md h-12 md:h-16 mr-4"
                    />
          <h1 className="text-2xl font-bold">eCell.NSUT</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <a href="#" className="hover:text-brand-yellow transition-colors">HOME</a>
          <a href="#" className="hover:text-brand-yellow transition-colors">ABOUT US</a>
          <a href="#" className="hover:text-brand-yellow transition-colors">GET IN TOUCH</a>
          <a href="#" className="hover:text-brand-yellow transition-colors">EVENTS</a>
          <a href="#" className="hover:text-brand-yellow transition-colors">CONTACT</a>
        </nav>
        <button className="hidden md:block border-2 border-black px-6 py-2 font-bold hover:bg-black hover:text-white transition-all">
          GET STARTED
        </button>
      </div>
    </header>
  );
};

export default Navbar;
=======
import {Menu, X} from "lucide-react";
import { useState } from 'react';
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () =>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <img className="h-10 w-9 mr-2" src={logo} alt="logo" />
                <span className="text-xl tracking-tight font-bold">eCell.NSUT</span>
            </div>
            <ul className="hidden lg:flex px-5 space-x-12 font-bold mr-10">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
{/*
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                    Create Account
                </a>
            </div> */}
            <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
            </div>
        </div>
        {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className="py-4">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                   
                </ul>
                <div className="flex space-x-6">
                    <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                    <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Create Account</a>
                </div>
            </div>
        )}
    </div>
   </nav>
  )
}

export default Navbar
>>>>>>> 793ced6 (Initial commit of TheTeam code)
