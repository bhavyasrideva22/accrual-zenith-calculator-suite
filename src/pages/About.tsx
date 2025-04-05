
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cream-DEFAULT">
      <Header />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <Card className="p-8 shadow-md bg-white">
            <h1 className="text-3xl font-bold text-primary mb-6">About Accrual Zenith Calculator</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-charcoal-DEFAULT mb-6">
                Welcome to Accrual Zenith Calculator, your trusted resource for understanding and calculating your 
                Paid Time Off (PTO) benefits with precision and clarity.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Mission</h2>
              <p className="text-charcoal-DEFAULT mb-6">
                We believe that every working professional should fully understand the value of their benefits package, 
                especially when it comes to PTO. Our mission is to provide easy-to-use, accurate tools that help you 
                quantify and optimize your time-off benefits, empowering you to make informed decisions about this 
                valuable component of your total compensation.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Why PTO Matters in India</h2>
              <p className="text-charcoal-DEFAULT mb-4">
                In the Indian corporate landscape, PTO policies can vary significantly across industries and companies. 
                From the standard Earned Leave (EL) and Casual Leave (CL) to sick leave and special leaves, understanding 
                your total PTO package can be complex.
              </p>
              <p className="text-charcoal-DEFAULT mb-6">
                Our calculator is designed specifically with Indian working professionals in mind, taking into account 
                the unique aspects of PTO accrual in the Indian context, including annual leave allocations, government 
                holidays, and standard working days calculations.
              </p>
              
              <div className="bg-cream-DEFAULT p-6 rounded-lg border border-secondary my-8">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Calculator Helps You:</h3>
                <ul className="list-disc pl-6 space-y-2 text-charcoal-DEFAULT">
                  <li>Calculate your PTO accrual at different intervals (monthly, weekly, etc.)</li>
                  <li>Determine the monetary value of your PTO based on your salary</li>
                  <li>Understand how your PTO fits into your overall compensation package</li>
                  <li>Plan your time off more strategically throughout the year</li>
                  <li>Generate professional reports for your records or to share with HR</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Who We Are</h2>
              <p className="text-charcoal-DEFAULT mb-4">
                Accrual Zenith Calculator was developed by a team of HR professionals, financial experts, and software 
                developers with extensive experience in Indian employment practices and benefits administration. 
                We noticed a gap in easily accessible, user-friendly tools for calculating PTO benefits, especially 
                tools that cater specifically to the Indian work environment.
              </p>
              <p className="text-charcoal-DEFAULT mb-6">
                Our team continually updates our calculator to reflect the latest best practices and regulations, 
                ensuring you always have access to accurate, relevant information about your PTO benefits.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Privacy & Security</h2>
              <p className="text-charcoal-DEFAULT mb-6">
                We respect your privacy. All calculations are performed in your browser, and we do not store any of 
                your personal or financial information. Our email functionality uses secure, encrypted transmission 
                to ensure your data remains confidential.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Contact Us</h2>
              <p className="text-charcoal-DEFAULT mb-4">
                Have questions, feedback, or suggestions for improving our calculator? We'd love to hear from you!
              </p>
              <p className="text-charcoal-DEFAULT">
                Email us at: <a href="mailto:info@accrual-zenith.com" className="text-softblue-DEFAULT hover:underline">info@accrual-zenith.com</a>
              </p>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
