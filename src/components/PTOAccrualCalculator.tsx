
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import PTOResultsDisplay from './PTOResultsDisplay';
import PTOExplanation from './PTOExplanation';
import { Download, Mail } from 'lucide-react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface CalculationResult {
  annualPTO: number;
  monthlyAccrual: number;
  biweeklyAccrual: number;
  weeklyAccrual: number;
  dailyAccrual: number;
  totalValue: number;
}

const PTOAccrualCalculator = () => {
  const { toast } = useToast();
  const [annualSalary, setAnnualSalary] = useState<string>('500000');
  const [ptoRate, setPtoRate] = useState<string>('15');
  const [workingDays, setWorkingDays] = useState<string>('250');
  const [accrualType, setAccrualType] = useState<string>('days');
  const [calculatedResults, setCalculatedResults] = useState<CalculationResult | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  const calculatePTO = () => {
    if (!annualSalary || !ptoRate || !workingDays) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const salary = parseFloat(annualSalary);
    const rate = parseFloat(ptoRate);
    const days = parseFloat(workingDays);

    if (isNaN(salary) || isNaN(rate) || isNaN(days)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for all fields.",
        variant: "destructive",
      });
      return;
    }

    let annualPTO: number;
    if (accrualType === 'days') {
      annualPTO = rate;
    } else if (accrualType === 'hours') {
      annualPTO = rate / 8; // assuming 8 hours per day
    } else { // percentage
      annualPTO = (rate / 100) * days;
    }

    const dailyRate = salary / days;
    const results: CalculationResult = {
      annualPTO: annualPTO,
      monthlyAccrual: annualPTO / 12,
      biweeklyAccrual: annualPTO / 26,
      weeklyAccrual: annualPTO / 52,
      dailyAccrual: annualPTO / 365,
      totalValue: annualPTO * dailyRate,
    };

    setCalculatedResults(results);
    setShowResults(true);
    
    toast({
      title: "Calculation Complete",
      description: "Your PTO accrual has been calculated successfully.",
    });
  };

  const handleDownloadPDF = () => {
    if (!calculatedResults) return;

    const doc = new jsPDF();
    
    // Add company logo/header
    doc.setFillColor(36, 94, 79); // primary color
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text("Accrual Zenith Calculator", 105, 15, { align: "center" });
    
    // Add report title
    doc.setTextColor(36, 94, 79);
    doc.setFontSize(18);
    doc.text("PTO Accrual Calculation Report", 105, 40, { align: "center" });
    
    // Add date
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 48, { align: "center" });
    
    // Add input parameters
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Input Parameters:", 14, 60);
    
    const inputData = [
      ["Annual Salary (₹)", `₹${Number(annualSalary).toLocaleString('en-IN')}`],
      ["PTO Rate", accrualType === 'percentage' ? `${ptoRate}%` : `${ptoRate} ${accrualType}`],
      ["Working Days", workingDays],
    ];
    
    (doc as any).autoTable({
      startY: 65,
      head: [["Parameter", "Value"]],
      body: inputData,
      theme: 'grid',
      headStyles: { fillColor: [122, 201, 167], textColor: [51, 51, 51] },
      styles: { fontSize: 10 },
    });
    
    // Add calculation results
    doc.text("Calculation Results:", 14, (doc as any).lastAutoTable.finalY + 10);
    
    const resultData = [
      ["Annual PTO Days", `${calculatedResults.annualPTO.toFixed(2)} days`],
      ["Monthly Accrual", `${calculatedResults.monthlyAccrual.toFixed(2)} days`],
      ["Biweekly Accrual", `${calculatedResults.biweeklyAccrual.toFixed(2)} days`],
      ["Weekly Accrual", `${calculatedResults.weeklyAccrual.toFixed(2)} days`],
      ["Daily Accrual", `${calculatedResults.dailyAccrual.toFixed(2)} days`],
      ["Total PTO Value (₹)", `₹${calculatedResults.totalValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`],
    ];
    
    (doc as any).autoTable({
      startY: (doc as any).lastAutoTable.finalY + 15,
      head: [["Metric", "Value"]],
      body: resultData,
      theme: 'grid',
      headStyles: { fillColor: [122, 201, 167], textColor: [51, 51, 51] },
      styles: { fontSize: 10 },
    });
    
    // Add footer
    const pageCount = doc.getNumberOfPages();
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text('© Accrual Zenith Calculator - For informational purposes only', 105, doc.internal.pageSize.height - 10, { align: 'center' });
      doc.text(`Page ${i} of ${pageCount}`, 105, doc.internal.pageSize.height - 5, { align: 'center' });
    }
    
    // Save the PDF
    doc.save('PTO_Accrual_Calculation.pdf');
    
    toast({
      title: "Download Complete",
      description: "Your PTO calculation has been downloaded as a PDF.",
    });
  };

  const handleSendEmail = () => {
    // In a real application, this would connect to a backend service
    // For demonstration, we'll just show a toast
    toast({
      title: "Email Feature",
      description: "In a production environment, this would send an email with the calculation results.",
    });
  };

  return (
    <div className="space-y-8">
      <Card className="p-6 shadow-md bg-white">
        <h2 className="text-2xl font-bold text-primary mb-6">PTO Accrual Calculator</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="annual-salary">Annual Salary (₹)</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
                <Input
                  id="annual-salary"
                  type="number"
                  className="pl-8"
                  value={annualSalary}
                  onChange={(e) => setAnnualSalary(e.target.value)}
                  placeholder="Enter your annual salary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pto-rate">PTO Rate</Label>
              <Input
                id="pto-rate"
                type="number"
                value={ptoRate}
                onChange={(e) => setPtoRate(e.target.value)}
                placeholder="Enter PTO rate"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accrual-type">Accrual Type</Label>
              <Select 
                value={accrualType} 
                onValueChange={setAccrualType}
              >
                <SelectTrigger id="accrual-type">
                  <SelectValue placeholder="Select accrual type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="days">Days per Year</SelectItem>
                  <SelectItem value="hours">Hours per Year</SelectItem>
                  <SelectItem value="percentage">Percentage of Working Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="working-days">Working Days per Year</Label>
              <Input
                id="working-days"
                type="number"
                value={workingDays}
                onChange={(e) => setWorkingDays(e.target.value)}
                placeholder="Enter number of working days"
              />
            </div>

            <div className="pt-6">
              <Button 
                onClick={calculatePTO}
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90"
              >
                Calculate PTO Accrual
              </Button>
            </div>

            {showResults && calculatedResults && (
              <div className="flex space-x-3 pt-4">
                <Button 
                  variant="outline" 
                  className="flex-1 border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-charcoal-DEFAULT"
                  onClick={handleDownloadPDF}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={handleSendEmail}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Results
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>
      
      {showResults && calculatedResults && (
        <PTOResultsDisplay results={calculatedResults} salary={parseFloat(annualSalary)} />
      )}
      
      <PTOExplanation />
    </div>
  );
};

export default PTOAccrualCalculator;
