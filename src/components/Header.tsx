
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary py-4 px-4 md:px-8 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Calendar className="h-8 w-8 mr-2 text-white" />
          <h1 className="text-2xl font-bold text-white">Accrual Zenith Calculator</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/"
                className="text-white hover:text-gold-DEFAULT transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                className="text-white hover:text-gold-DEFAULT transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Button 
                className="bg-gold-DEFAULT text-charcoal-DEFAULT hover:bg-gold-DEFAULT/90 flex items-center gap-1"
              >
                <IndianRupee className="h-4 w-4" />
                Start Calculating
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
