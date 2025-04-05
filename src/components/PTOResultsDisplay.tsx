
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

interface CalculationResult {
  annualPTO: number;
  monthlyAccrual: number;
  biweeklyAccrual: number;
  weeklyAccrual: number;
  dailyAccrual: number;
  totalValue: number;
}

interface PTOResultsDisplayProps {
  results: CalculationResult;
  salary: number;
}

const PTOResultsDisplay: React.FC<PTOResultsDisplayProps> = ({ results, salary }) => {
  // Prepare data for charts
  const accrualData = [
    { name: 'Annual', value: results.annualPTO, fill: '#245e4f' },
    { name: 'Monthly', value: results.monthlyAccrual, fill: '#7ac9a7' },
    { name: 'Bi-weekly', value: results.biweeklyAccrual, fill: '#e9c46a' },
    { name: 'Weekly', value: results.weeklyAccrual, fill: '#4a8fe7' },
    { name: 'Daily', value: results.dailyAccrual, fill: '#333333' },
  ];

  const salaryVsPTOData = [
    { name: 'Salary', value: salary - results.totalValue },
    { name: 'PTO Value', value: results.totalValue },
  ];
  
  const COLORS = ['#7ac9a7', '#245e4f'];

  const formatCurrency = (value: number) => {
    return `₹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  };

  const formatDays = (days: number) => {
    return `${days.toFixed(2)} days`;
  };

  return (
    <Card className="p-6 shadow-md bg-white">
      <h2 className="text-2xl font-bold text-primary mb-6">Your PTO Accrual Results</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-charcoal-DEFAULT">Summary</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cream-DEFAULT p-4 rounded-lg border border-secondary">
              <p className="text-sm text-gray-500">Annual PTO</p>
              <p className="text-2xl font-bold text-primary">{results.annualPTO.toFixed(2)} days</p>
            </div>
            
            <div className="bg-cream-DEFAULT p-4 rounded-lg border border-secondary">
              <p className="text-sm text-gray-500">PTO Value</p>
              <p className="text-2xl font-bold text-primary">₹{results.totalValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
            </div>
            
            <div className="bg-cream-DEFAULT p-4 rounded-lg border border-secondary">
              <p className="text-sm text-gray-500">Monthly Accrual</p>
              <p className="text-xl font-bold text-primary">{results.monthlyAccrual.toFixed(2)} days</p>
            </div>
            
            <div className="bg-cream-DEFAULT p-4 rounded-lg border border-secondary">
              <p className="text-sm text-gray-500">Daily Rate</p>
              <p className="text-xl font-bold text-primary">₹{(results.totalValue / results.annualPTO).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-charcoal-DEFAULT mb-4">Accrual Breakdown</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={accrualData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={formatDays} />
                  <Tooltip 
                    formatter={(value: number) => [`${value.toFixed(2)} days`, 'Accrual']}
                    labelStyle={{ color: '#333333' }}
                  />
                  <Bar dataKey="value" name="PTO Accrual">
                    {accrualData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-charcoal-DEFAULT">PTO Value vs. Salary</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salaryVsPTOData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {salaryVsPTOData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [formatCurrency(value), 'Amount']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-cream-DEFAULT p-4 rounded-lg border border-secondary mt-6">
            <h4 className="font-semibold text-primary mb-2">Detailed Accrual Rates</h4>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-charcoal-DEFAULT">Annual:</span>
                <span className="font-medium">{results.annualPTO.toFixed(2)} days</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-charcoal-DEFAULT">Monthly:</span>
                <span className="font-medium">{results.monthlyAccrual.toFixed(2)} days</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-charcoal-DEFAULT">Bi-weekly:</span>
                <span className="font-medium">{results.biweeklyAccrual.toFixed(2)} days</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-charcoal-DEFAULT">Weekly:</span>
                <span className="font-medium">{results.weeklyAccrual.toFixed(2)} days</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-charcoal-DEFAULT">Daily:</span>
                <span className="font-medium">{results.dailyAccrual.toFixed(2)} days</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PTOResultsDisplay;
