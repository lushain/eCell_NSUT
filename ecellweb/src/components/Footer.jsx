import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import React from 'react';
import FooterLogo from './FooterLogo';
const Footer = () => {
  return (
    <footer className="border-t mt-20  py-10 border-neutral-700">
      <div className=" lg:ml-10 md:ml-70 sm:ml-30 grid grid-cols-2 lg:grid-cols-3 gap-2">
        <div>
          <FooterLogo />
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;