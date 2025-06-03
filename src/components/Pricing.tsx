
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Solo",
      price: 29,
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "Automated bookkeeping",
        "Expense categorization",
        "Quarterly tax estimates",
        "Basic financial reports",
        "Email support",
        "1 business entity"
      ],
      limitations: ["Tax filing not included", "No payroll"],
      popular: false
    },
    {
      name: "Business",
      price: 99,
      description: "Ideal for SMBs with employees and complex needs",
      features: [
        "Everything in Solo",
        "Full tax prep & filing",
        "Payroll management",
        "W-2s & 1099s",
        "Advanced reporting",
        "AI copilot chat",
        "Up to 3 entities",
        "Priority support"
      ],
      limitations: [],
      popular: true
    },
    {
      name: "Enterprise",
      price: 299,
      description: "For startups and growing companies",
      features: [
        "Everything in Business",
        "Unlimited entities",
        "Multi-currency support",
        "Custom integrations",
        "Dedicated account manager",
        "Audit support",
        "Advanced compliance",
        "Phone support"
      ],
      limitations: [],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700">Simple Pricing</Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Transparent Pricing, No Surprises
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Flat monthly rates with everything included. No per-transaction fees, 
            no hidden costs, no expensive hourly rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-slate-200'}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <CardDescription className="mt-2 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-start gap-3 opacity-60">
                      <span className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0">×</span>
                      <span className="text-slate-500">{limitation}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Optional Add-Ons</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h4 className="font-semibold text-lg mb-2">Human CPA Review</h4>
              <p className="text-slate-600 mb-3">Professional review of AI work</p>
              <p className="text-2xl font-bold text-slate-900">$49<span className="text-sm text-slate-500">/month</span></p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h4 className="font-semibold text-lg mb-2">Audit Protection</h4>
              <p className="text-slate-600 mb-3">Full audit defense and support</p>
              <p className="text-2xl font-bold text-slate-900">$99<span className="text-sm text-slate-500">/month</span></p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h4 className="font-semibold text-lg mb-2">CFO Insights</h4>
              <p className="text-slate-600 mb-3">Strategic financial analysis</p>
              <p className="text-2xl font-bold text-slate-900">$199<span className="text-sm text-slate-500">/month</span></p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            All plans include bank-level security, SOC2 compliance, and 24/7 AI processing.
          </p>
          <p className="text-sm text-slate-500">
            Cancel anytime. No setup fees. 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};
