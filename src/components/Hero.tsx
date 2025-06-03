
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, TrendingUp, Clock, Shield } from "lucide-react";

interface HeroProps {
  onWaitlist: (e: React.FormEvent) => void;
  email: string;
  setEmail: (email: string) => void;
}

export const Hero = ({ onWaitlist, email, setEmail }: HeroProps) => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                ✨ AI-Native Accounting Firm
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Smart books.<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  AI taxes.
                </span><br />
                No accountants required.
              </h1>
              <p className="text-xl text-slate-600 max-w-xl">
                Ledgerly is your AI-powered accounting team that handles everything: 
                bookkeeping, tax filing, payroll, and compliance. Focus on growing your business 
                while we handle the books.
              </p>
            </div>

            <div className="space-y-4">
              <form onSubmit={onWaitlist} className="flex gap-3 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-lg"
                />
                <Button type="submit" size="lg" className="px-8 h-12">
                  Join Waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
              <p className="text-sm text-slate-500">
                Join 1,200+ businesses on our early access waitlist
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-slate-700">99.9% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">24/7 Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-slate-700">Bank-Level Security</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-slate-500 ml-auto">Ledgerly Dashboard</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <p className="font-semibold text-green-800">Tax Filing Complete</p>
                    <p className="text-sm text-green-600">Federal & State returns filed automatically</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">✓ Filed</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div>
                    <p className="font-semibold text-blue-800">Monthly Books Closed</p>
                    <p className="text-sm text-blue-600">147 transactions categorized</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700">✓ Complete</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div>
                    <p className="font-semibold text-purple-800">Payroll Processed</p>
                    <p className="text-sm text-purple-600">5 employees paid, taxes withheld</p>
                  </div>
                  <Badge className="bg-purple-100 text-purple-700">✓ Paid</Badge>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-500 text-center">
                  <span className="font-medium text-slate-700">AI Copilot:</span> "Your Q4 tax savings look great! 
                  You're on track for a $3,200 refund."
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg">
              <p className="text-sm font-medium">$12,340</p>
              <p className="text-xs opacity-90">Tax Savings</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-3 rounded-lg shadow-lg">
              <p className="text-sm font-medium">100%</p>
              <p className="text-xs opacity-90">Automated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
