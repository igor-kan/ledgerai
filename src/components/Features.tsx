
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, FileText, Users, MessageSquare, Calendar, Check } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "AI Bookkeeper",
      description: "Automatically categorize transactions, detect duplicates, and maintain clean books 24/7.",
      benefits: ["99.9% accuracy", "Real-time processing", "Industry-specific rules"],
      color: "blue"
    },
    {
      icon: FileText,
      title: "Tax Prep & Filing",
      description: "End-to-end tax preparation and filing for federal, state, and quarterly obligations.",
      benefits: ["All forms supported", "Automatic deduction detection", "Direct IRS filing"],
      color: "green"
    },
    {
      icon: Users,
      title: "Payroll Management",
      description: "Complete payroll processing with tax withholding, W-2s, and 1099s.",
      benefits: ["Multi-state compliance", "Contractor management", "Automated filings"],
      color: "purple"
    },
    {
      icon: MessageSquare,
      title: "AI Finance Copilot",
      description: "Ask questions about your finances and get instant, accurate answers.",
      benefits: ["Natural language queries", "Visual insights", "Proactive alerts"],
      color: "orange"
    },
    {
      icon: Calendar,
      title: "Multi-Entity Support",
      description: "Handle multiple businesses, LLCs, and entities from one dashboard.",
      benefits: ["Unlimited entities", "Cross-entity reporting", "Team collaboration"],
      color: "indigo"
    },
    {
      icon: Check,
      title: "Audit Readiness",
      description: "Maintain compliance and audit-ready documentation automatically.",
      benefits: ["Complete audit trails", "SOC2 compliance", "Export capabilities"],
      color: "teal"
    }
  ];

  const colorMap = {
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    green: "bg-green-50 border-green-200 text-green-700",
    purple: "bg-purple-50 border-purple-200 text-purple-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700",
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
    teal: "bg-teal-50 border-teal-200 text-teal-700"
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700">Core Features</Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Your Complete AI Accounting Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From daily bookkeeping to annual tax filing, Ledgerly's AI handles every aspect 
            of your financial operations with precision and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${colorMap[feature.color as keyof typeof colorMap]} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-600" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Preview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Seamless Integrations</h3>
            <p className="text-lg text-slate-600">Connect your existing tools and bank accounts</p>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[
                "Chase Bank", "Wells Fargo", "Stripe", "PayPal", "QuickBooks", "Gusto",
                "Square", "Plaid", "American Express", "Bank of America", "Shopify", "Xero"
              ].map((integration, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center mb-2">
                    <span className="text-xs font-medium text-slate-600">{integration.slice(0, 4)}</span>
                  </div>
                  <p className="text-xs text-slate-500">{integration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
