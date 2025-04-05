
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PTOAccrualCalculator from "@/components/PTOAccrualCalculator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Calculator, Download, Mail, IndianRupee } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cream-DEFAULT">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              PTO Accrual Calculator
            </h1>
            <p className="text-lg md:text-xl text-charcoal-DEFAULT max-w-3xl mx-auto mb-8">
              Calculate your Paid Time Off benefits accurately and understand their true value in your compensation package.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gold-DEFAULT text-charcoal-DEFAULT hover:bg-gold-DEFAULT/90 flex items-center gap-2"
                asChild
              >
                <a href="#calculator">
                  <Calculator className="h-5 w-5" />
                  Start Calculating
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-2"
                asChild
              >
                <Link to="/about">
                  <Calendar className="h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 bg-white px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
              Features of Our PTO Calculator
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-cream-DEFAULT p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-primary h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Precise Calculations</h3>
                <p className="text-charcoal-DEFAULT">
                  Get accurate PTO accrual rates based on your specific employment terms.
                </p>
              </div>
              
              <div className="bg-cream-DEFAULT p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-primary h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <IndianRupee className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Financial Valuation</h3>
                <p className="text-charcoal-DEFAULT">
                  Understand the monetary value of your PTO as part of your total compensation.
                </p>
              </div>
              
              <div className="bg-cream-DEFAULT p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-primary h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <Download className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">PDF Reports</h3>
                <p className="text-charcoal-DEFAULT">
                  Download professional reports to keep records or share with your HR department.
                </p>
              </div>
              
              <div className="bg-cream-DEFAULT p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-primary h-14 w-14 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Email Results</h3>
                <p className="text-charcoal-DEFAULT">
                  Send calculation results directly to your email for future reference.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section id="calculator" className="py-12 md:py-16 px-4">
          <div className="container mx-auto">
            <PTOAccrualCalculator />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-primary px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Make Informed Decisions About Your PTO
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
              Understanding your PTO accrual is crucial for work-life balance and financial planning. 
              Use our calculator to get the full picture of your paid time off benefits.
            </p>
            <Button 
              size="lg" 
              className="bg-gold-DEFAULT text-charcoal-DEFAULT hover:bg-gold-DEFAULT/90"
              asChild
            >
              <a href="#calculator">
                Calculate Your PTO Now
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
