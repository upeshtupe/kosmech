
import { Clock, CheckCircle, TrendingUp, DollarSign } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "85% Faster Development",
      description: "Reduce your time-to-market with AI-accelerated formulation processes",
      stat: "6 months → 1 month average",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CheckCircle,
      title: "95% Error Reduction",
      description: "Minimize costly mistakes with predictive quality assurance",
      stat: "Near-zero recall rate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "90% AI Analysis",
      description: "Leverage powerful AI to analyze your formulations at scale",
      stat: "Proven results across clients",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: DollarSign,
      title: "99% Optimized AI Data",
      description: "Experience near-perfect optimization of formulation data",
      stat: "Average client savings",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Measurable Impact on Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our clients consistently achieve remarkable improvements across key performance indicators. 
            Here's what you can expect when you partner with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center">
              <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${benefit.color} text-white text-sm font-semibold rounded-full`}>
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>
        
        {/* CALL TO ACTION CARD - Matching SolutionSection Card Style with hover */}
        <div className="mt-16 flex justify-center">
          <Card
            className="
              group relative overflow-hidden shadow-2xl border-0 bg-white/70
              backdrop-bl-xl border-[3px] border-red-300 
              rounded-2xl max-w-xl w-full
              transition-transform duration-300
              hover:scale-105 hover:shadow-red-300/40 hover:shadow-2xl
            "
            style={{ boxShadow: '0 10px 32px 0 rgba(252, 80, 80, 0.13)' }}
          >
            <CardHeader className="pt-8 pb-4 px-8 flex flex-col items-center">
              <div 
                className="
                  w-16 h-16 rounded-xl flex items-center justify-center mb-4
                  bg-gradient-to-br from-red-300 via-red-200 to-orange-200
                  shadow-lg transition-transform duration-300 
                  group-hover:scale-110 group-hover:shadow-2xl
                "
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg text-red-700 text-center">
                Ready to Transform Your Development Process?
              </h3>
            </CardHeader>
            <CardContent className="pb-8 px-8 pt-0">
              <p className="text-xl mb-6 opacity-90 drop-shadow text-red-800 text-center">
                Join 500+ companies already using our AI-powered solutions
              </p>
              {/* The div containing the button-like elements has been removed here */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
