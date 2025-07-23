
import { Check, FileText, Users, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const pricingTiers = [
    {
      icon: FileText,
      title: "One Time Report",
      subtitle: "Choose Any Single Report",
      price: "₹8,999",
      description: "Get comprehensive analysis with your choice of any one specialized report from our expert data services.",
      features: [
        "Molecular Docking Report",
        "Stat-Ease Anova Report", 
        "Drug Excipient Compatibility Report",
        "Excipient Data Report",
        "Drug ADMET Profiling",
        "Complete analysis included",
        "AI-powered insights",
        "Professional documentation"
      ],
      popular: true
    },
    {
      icon: Users,
      title: "Expert Consultation",
      subtitle: "Schedule Call or Meet",
      price: "₹14,999 / Call",
      description: "Direct access to our expert consultants for personalized guidance, strategy development, and professional consultation.",
      features: [
        "One-on-one expert consultation",
        "Schedule call or in-person meeting",
        "Personalized strategy development",
        "Professional guidance",
        "Regulatory compliance advice",
        "Custom solution recommendations",
        "Follow-up support included",
        "Flexible scheduling options"
      ],
      popular: false,
      highlight: true // new field to identify
    }
  ];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect service for your formulation development needs. 
            All services include our AI-powered analysis and expert insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => {
            // Use a different style for the Expert Consultation card
            const isExpert = tier.title === "Expert Consultation";
            const cardBorder = tier.popular
              ? 'border-2 border-blue-500 shadow-xl scale-105'
              : isExpert
                ? 'border-2 border-fuchsia-500 shadow-xl scale-105'
                : 'border-0 shadow-lg';
            const iconBg = tier.popular
              ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
              : isExpert
                ? 'bg-gradient-to-br from-fuchsia-500 to-pink-500'
                : 'bg-gradient-to-br from-gray-500 to-gray-600';
            const buttonClass = tier.popular
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
              : isExpert
                ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white'
                : 'bg-gray-900 hover:bg-gray-800 text-white';
            
            return (
              <Card 
                key={index} 
                className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${cardBorder}`}
              >
                {/* Show "Most Popular" above One Time Report, "Recommended" above Expert Consultation */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                {isExpert && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${iconBg}`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{tier.title}</CardTitle>
                  <CardDescription className="text-gray-600">{tier.subtitle}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">
                    {tier.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-semibold ${buttonClass}`}
                    size="lg"
                    onClick={handleScrollToContact}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer tailored packages for enterprise clients.
          </p>
          <Button variant="outline" size="lg" className="font-semibold" onClick={handleScrollToContact}>
            <Phone className="mr-2 w-5 h-5" />
            Contact for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

