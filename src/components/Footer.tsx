
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 px-4 md:px-8 text-white mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Accrual Zenith Calculator</h3>
          <p className="text-sm opacity-80">
            Your trusted partner for accurate PTO calculations, helping you make informed
            decisions about your time-off benefits.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-gold-DEFAULT transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-gold-DEFAULT transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm opacity-80 hover:opacity-100 hover:text-gold-DEFAULT transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100 hover:text-gold-DEFAULT transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm opacity-80 mb-2">
            Have questions about our calculators? Get in touch with us.
          </p>
          <a 
            href="mailto:info@accrual-zenith.com" 
            className="text-gold-DEFAULT hover:underline"
          >
            info@accrual-zenith.com
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-4 border-t border-white/20 text-center text-sm opacity-70">
        <p>© {new Date().getFullYear()} Accrual Zenith Calculator. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
