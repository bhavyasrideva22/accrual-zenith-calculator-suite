
import React from 'react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PTOExplanation = () => {
  return (
    <Card className="p-6 shadow-md bg-white">
      <h2 className="text-2xl font-bold text-primary mb-6">Understanding PTO Accrual</h2>
      
      <div className="prose max-w-none">
        <p className="text-charcoal-DEFAULT mb-4">
          Paid Time Off (PTO) is a valuable employee benefit that provides compensated leave for personal needs, 
          vacations, illness, or other purposes. Understanding how PTO accrues can help you better plan your time 
          and maximize this important benefit.
        </p>
        
        <h3 className="text-xl font-semibold text-primary mt-6 mb-4">What is PTO Accrual?</h3>
        <p className="text-charcoal-DEFAULT mb-4">
          PTO accrual refers to the rate at which you earn paid time off throughout your employment. 
          Most employers in India provide PTO that accumulates gradually over time rather than granting it all at once. 
          This calculator helps you understand exactly how your PTO builds up over various periods and what 
          it's worth in financial terms.
        </p>
        
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold text-primary">Why Calculate Your PTO Accrual?</AccordionTrigger>
            <AccordionContent className="text-charcoal-DEFAULT">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Financial Planning:</strong> Understanding the monetary value of your PTO helps you make informed decisions about using or cashing out leave.</li>
                <li><strong>Time Management:</strong> Knowing your accrual rate allows you to better plan vacations and personal time throughout the year.</li>
                <li><strong>Benefit Awareness:</strong> Many employees don't fully understand the value of their PTO as part of their total compensation package.</li>
                <li><strong>Career Decisions:</strong> When evaluating job offers, understanding PTO policies and their financial impact is crucial.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold text-primary">Common PTO Accrual Methods in India</AccordionTrigger>
            <AccordionContent className="text-charcoal-DEFAULT">
              <p className="mb-4">In the Indian corporate environment, several PTO accrual methods are common:</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Fixed Days Per Year:</strong> A specific number of days (typically 15-25) granted annually, often accruing monthly.
                </li>
                <li>
                  <strong>Hours-Based Accrual:</strong> PTO calculated in hours rather than days, common in companies with flexible working arrangements.
                </li>
                <li>
                  <strong>Percentage-Based:</strong> PTO calculated as a percentage of worked days, ranging from 5-10% of total working days.
                </li>
                <li>
                  <strong>Tiered Accrual:</strong> Increasing PTO based on years of service, with longer-tenured employees earning more leave.
                </li>
              </ol>
              <p className="mt-4">
                Our calculator supports all these accrual methods, giving you flexibility to model different scenarios.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold text-primary">Indian PTO Regulations & Practices</AccordionTrigger>
            <AccordionContent className="text-charcoal-DEFAULT">
              <p className="mb-4">
                Understanding Indian leave policies is essential for proper PTO planning:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Earned Leave (EL):</strong> Most companies offer 15-24 days of earned leave annually that can be accumulated or encashed.</li>
                <li><strong>Casual Leave (CL):</strong> Typically 7-12 days annually for personal matters, usually not carried forward or encashed.</li>
                <li><strong>Sick Leave (SL):</strong> Usually 7-14 days annually for health-related absences.</li>
                <li><strong>Public Holidays:</strong> About 10-12 nationally/regionally recognized holidays separate from PTO.</li>
                <li><strong>Maternity/Paternity Leave:</strong> As per the Maternity Benefit Act, female employees are entitled to 26 weeks of paid leave. Paternity leave varies by company policy.</li>
              </ul>
              <p className="mt-4">
                While the calculator combines these into a total PTO value, understanding the different leave types is important for maximizing your benefits.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold text-primary">Maximizing Your PTO Benefits</AccordionTrigger>
            <AccordionContent className="text-charcoal-DEFAULT">
              <p className="mb-4">Here are strategies to optimize your PTO benefits:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Understand Carryover Policies:</strong> Know if unused PTO can be carried to the next year and any maximum limits.</li>
                <li><strong>Plan Around Indian Holidays:</strong> Strategically schedule PTO around public holidays to extend breaks.</li>
                <li><strong>Track Your Balance:</strong> Regularly monitor your PTO balance to avoid forfeiting days.</li>
                <li><strong>Understand Encashment Options:</strong> Know when and how much PTO can be converted to cash compensation.</li>
                <li><strong>Negotiate PTO:</strong> When accepting job offers or during reviews, consider negotiating additional PTO as part of your compensation package.</li>
              </ol>
              <p className="mt-4">
                By understanding the true value of your PTO using our calculator, you'll be better positioned to make these strategic decisions.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="bg-cream-DEFAULT p-4 rounded-lg border border-secondary mt-8">
          <h3 className="text-lg font-semibold text-primary mb-2">How Our Calculator Works</h3>
          <p className="text-charcoal-DEFAULT">
            Our PTO Accrual Calculator uses your annual salary, PTO policy details, and working days to calculate your 
            accrual at different intervals (annual, monthly, bi-weekly, weekly, and daily) and the total monetary 
            value of your PTO. This information helps you understand exactly how your PTO accumulates and its 
            financial worth as part of your total compensation package.
          </p>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          Disclaimer: This calculator provides estimates based on the information you provide. Actual PTO accrual may 
          vary based on your specific company policies, employment agreement, and applicable laws. Always refer to 
          your employee handbook or HR department for the most accurate information regarding your PTO benefits.
        </p>
      </div>
    </Card>
  );
};

export default PTOExplanation;
