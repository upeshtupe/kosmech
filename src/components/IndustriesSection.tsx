
import { Pill, Sparkles, Leaf, Palette, FlaskConical, Building2, Microscope } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconGradients = [
  "from-indigo-700 via-indigo-500 to-blue-500",
  "from-pink-600 via-fuchsia-500 to-yellow-400",
  "from-green-700 via-green-500 to-cyan-400",
  "from-purple-700 via-violet-500 to-cyan-400",
  "from-yellow-400 via-orange-400 to-pink-500",
  "from-rose-700 via-rose-500 to-pink-500",
  "from-cyan-700 via-blue-500 to-indigo-700"
];

const IndustriesSection = () => {
  const industries = [
    {
      icon: Pill,
      title: "Pharmaceutical",
      description: "Accelerate drug formulation with AI-driven compound optimization and regulatory compliance support.",
      features: ["Drug Discovery", "Clinical Trials", "Regulatory Support", "Quality Assurance"]
    },
    {
      icon: Sparkles,
      title: "Cosmetics",
      description: "Create breakthrough beauty products with intelligent ingredient matching and stability testing.",
      features: ["Ingredient Analysis", "Stability Testing", "Consumer Testing", "Market Research"]
    },
    {
      icon: Leaf,
      title: "Herbal",
      description: "Optimize natural product formulations with traditional knowledge and modern science integration.",
      features: ["Natural Compounds", "Traditional Medicine", "Extraction Methods", "Purity Testing"]
    },
    {
      icon: Palette,
      title: "Perfume",
      description: "Craft unique fragrances using AI-powered scent profiling and consumer preference analysis.",
      features: ["Scent Profiling", "Blend Optimization", "Consumer Preferences", "Longevity Testing"]
    },
    {
      icon: FlaskConical,
      title: "Nutraceutical",
      description: "Develop effective nutritional supplements with evidence-based formulation and bioavailability optimization.",
      features: ["Bioavailability", "Dosage Optimization", "Safety Testing", "Clinical Validation"]
    },
    {
      icon: Building2,
      title: "API Industries",
      description: "Streamline Active Pharmaceutical Ingredient production with process optimization and quality control.",
      features: ["Process Optimization", "Yield Enhancement", "Impurity Profiling", "Scale-up Support"]
    },
    {
      icon: Microscope,
      title: "Analytical Development",
      description: "Enhance laboratory capabilities with AI-powered method development and validation protocols.",
      features: ["Method Development", "Validation Protocols", "Data Analysis", "Instrument Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Transform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered solutions are specifically designed for the unique challenges of each industry, 
            delivering measurable results across diverse product development needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div
                  className={`
                    mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4
                    bg-gradient-to-br ${iconGradients[index % iconGradients.length]}
                    group-hover:scale-110 transition-transform duration-300 shadow-lg
                  `}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </CardDescription>
                <ul className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
