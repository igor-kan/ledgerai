
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Check, ArrowRight, Shield, Users, Calendar, FileText, BarChart3, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to join the waitlist.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Welcome to Ledgerly!",
      description: "You've been added to our early access waitlist. We'll be in touch soon!",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Ledgerly</span>
            <Badge variant="secondary" className="ml-2 text-xs">Beta</Badge>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#security" className="text-slate-600 hover:text-slate-900 transition-colors">Security</a>
            <Button variant="outline" size="sm">Sign In</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero onWaitlist={handleWaitlist} email={email} setEmail={setEmail} />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* Security & Compliance */}
      <section id="security" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Bank-Level Security</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Your financial data is protected with enterprise-grade encryption and compliance standards.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">SOC2 Compliant</h3>
              <p className="text-slate-300">Certified security controls and regular audits</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Encrypted Storage</h3>
              <p className="text-slate-300">256-bit AES encryption for all data at rest</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Audit Ready</h3>
              <p className="text-slate-300">Complete audit trails and compliance reporting</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
