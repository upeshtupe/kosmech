import { ArrowRight, CheckCircle, Beaker, TrendingUp, Clock, Shield, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IndustriesSection from "@/components/IndustriesSection";
import SolutionsSection from "@/components/SolutionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="pt-16"> {/* Add padding-top to account for fixed header */}
        <section id="home">
          <HeroSection />
        </section>
        {/* PharmaFlow Diagram Section */}
        <section id="pharmaflow-diagram" className="py-12">
          <div
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-gray-800 transition-all duration-300 ease-out hover:shadow-3xl hover:-translate-y-1 hover:border-cyan-400 dark:hover:border-cyan-400 focus-within:shadow-3xl focus-within:-translate-y-1 focus-within:border-cyan-400"
            tabIndex={0}
            aria-label="PharmaFlow System Diagram: hover for details"
          >
            <img
              src="/lovable-uploads/dc6d199e-3056-482d-8f1b-f67124a12602.png"
              alt="PharmaFlow System Diagram"
              className="w-full h-auto object-contain bg-gray-50 transition-transform duration-300 ease-out hover:scale-105"
              loading="lazy"
            />
            <div className="text-center text-sm text-muted-foreground py-3 font-medium border-t border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-slate-900">
              PharmaFlow System Diagram
            </div>
          </div>
        </section>
        {/* Removed PharmaFlowWireframe from here */}
        <section id="industries">
          <IndustriesSection />
        </section>
        <section id="solutions">
          <SolutionsSection />
        </section>
        <section id="benefits">
          <BenefitsSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </div>
    </div>
  );
};
export default Index;
