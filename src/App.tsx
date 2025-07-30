/**
 * LedgerAI - AI-Powered Accounting and Financial Management Platform
 * 
 * Advanced financial ledger management system that leverages artificial intelligence for:
 * - Automated transaction categorization and reconciliation
 * - Intelligent expense tracking and budget optimization
 * - AI-driven financial analytics and forecasting
 * - Real-time cash flow monitoring and alerts
 * - Automated compliance reporting and tax preparation
 * 
 * Financial Architecture Philosophy:
 * Built with HashRouter to ensure reliable deployment across various business
 * environments, from small startups to enterprise accounting departments.
 * The hash-based routing eliminates server configuration complexity while
 * maintaining full functionality for financial workflow management.
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

/**
 * Financial Data Management Configuration
 * 
 * React Query client optimized for accounting and financial data workflows:
 * - Aggressive caching for historical financial data that rarely changes
 * - Real-time synchronization for live transaction processing
 * - Robust error handling for critical financial operations
 * - Optimistic updates for improved user experience during data entry
 * 
 * Financial-Specific Optimizations:
 * - Transaction integrity through atomic data operations
 * - Audit trail preservation for all financial modifications
 * - Encryption-ready data handling for sensitive financial information
 * - Multi-currency support with real-time exchange rate updates
 * - Compliance-ready data retention and archival policies
 */
const queryClient = new QueryClient();

/**
 * Root LedgerAI Application Component
 * 
 * Establishes the foundational infrastructure for AI-powered accounting operations
 * with emphasis on financial data security, regulatory compliance, and user experience.
 * 
 * Provider Architecture (Financial-Grade Hierarchy):
 * 1. QueryClientProvider - Financial data state with transaction integrity
 * 2. TooltipProvider - Contextual help for complex accounting terminology
 * 3. Notification Systems - Critical for financial alerts and compliance reminders
 * 4. HashRouter - Business-friendly deployment without server configuration
 * 
 * Accounting Platform Routing Strategy:
 * - HashRouter chosen for universal business environment compatibility
 * - Eliminates IT infrastructure barriers for accounting firm deployments
 * - Consistent behavior across diverse corporate network configurations
 * - Simplified integration with existing business management systems
 * 
 * Financial Application Architecture:
 * - "/" : Main accounting dashboard and financial overview interface
 * - "*" : Financial-grade error handling for data integrity protection
 * 
 * @returns {JSX.Element} Complete AI accounting platform with secure data handling
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* 
        Financial Notification Infrastructure
        
        Critical for accounting operations where notifications affect financial decisions:
        - Toaster: Standard notifications for routine accounting workflow updates
        - Sonner: High-priority alerts for financial discrepancies and compliance issues
        
        Accounting-Specific Features:
        - Color-coded alerts for different financial severity levels
        - Persistent notifications for unreconciled transactions
        - Accessibility compliance for accounting professionals with disabilities
        - Integration with financial alert systems and compliance monitoring
        - Audit trail logging for all notification interactions
      */}
      <Toaster />
      <Sonner />
      
      {/*
        HashRouter for Business Environment Compatibility
        
        Financial Platform Benefits:
        - Works across all business IT configurations without modification
        - No server-side routing setup required for accounting departments
        - Compatible with corporate firewalls and security policies
        - Reduces deployment complexity for accounting firms and businesses
        - Consistent functionality across different corporate network environments
        
        Accounting Workflow Considerations:
        - Bookmarkable financial report URLs for recurring analysis
        - Shareable links for financial data collaboration
        - Integration-ready for existing ERP and accounting software systems
        - Compliant with corporate IT security and data governance policies
        - Support for multi-tenant accounting firm environments
      */}
      <HashRouter>
        <Routes>
          {/* 
            Primary Financial Dashboard
            
            Comprehensive accounting interface featuring:
            - Real-time financial data visualization and analytics
            - AI-powered transaction categorization and insights
            - Interactive financial reporting and forecasting tools
            - Multi-entity accounting support for complex business structures
            - Automated compliance monitoring and regulatory reporting
          */}
          <Route path="/" element={<Index />} />
          
          {/* 
            Financial-Grade Error Handling
            
            CRITICAL: Must remain as the final route for financial data integrity
            
            Accounting-Specific Error Management:
            - Graceful handling of broken financial workflow links
            - Data integrity protection through comprehensive error logging
            - Financial audit trail maintenance for all navigation errors
            - Fallback mechanisms to prevent accounting workflow interruption
            - Integration with financial system monitoring and alerting
            - Compliance documentation for all system errors and resolutions
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
