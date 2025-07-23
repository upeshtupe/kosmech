
import { Brain, Zap, Shield, ChartBar, Cog, Database, FileText, Microscope } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const borderGradients = [
  "border-[3px] border-indigo-400",
  "border-[3px] border-cyan-400",
  "border-[3px] border-fuchsia-400",
  "border-[3px] border-yellow-400",
  "border-[3px] border-green-400",
  "border-[3px] border-rose-400",
  "border-[3px] border-purple-400",
  "border-[3px] border-violet-400",
];

const iconGradients = [
  "from-indigo-800 via-indigo-500 to-blue-500",
  "from-cyan-700 via-cyan-500 to-teal-400",
  "from-fuchsia-700 via-fuchsia-500 to-pink-400",
  "from-yellow-500 via-yellow-300 to-orange-400",
  "from-green-700 via-green-500 to-lime-400",
  "from-rose-700 via-rose-500 to-pink-400",
  "from-purple-800 via-purple-500 to-indigo-600",
  "from-violet-800 via-violet-500 to-cyan-500",
];

const glassStyle = "bg-white/60 border border-white/30 backdrop-blur-xl";
const textShadow = "drop-shadow-xl";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Computer Aided Drug Design Report",
      description: "Comprehensive computational analysis for drug discovery and development using advanced algorithms.",
      badge: "Drug Discovery",
      benefits: ["Molecular Modeling", "Target Identification", "Lead Optimization"]
    },
    {
      icon: Microscope,
      title: "Docking Report",
      description: "Molecular docking analysis to predict binding affinity and interaction patterns between molecules.",
      badge: "Molecular Analysis",
      benefits: ["Binding Prediction", "Interaction Analysis", "Affinity Scoring"]
    },
    {
      icon: ChartBar,
      title: "ANOVA Report",
      description: "Statistical analysis of variance to determine significant differences in experimental data.",
      badge: "Statistical Analysis",
      benefits: ["Variance Analysis", "Statistical Significance", "Data Interpretation"]
    },
    {
      icon: Database,
      title: "Excipient Data Report",
      description: "Comprehensive database analysis of pharmaceutical excipients and their properties.",
      badge: "Material Science",
      benefits: ["Excipient Properties", "Compatibility Data", "Regulatory Information"]
    },
    {
      icon: Shield,
      title: "ADMET Report",
      description: "Analysis of Absorption, Distribution, Metabolism, Excretion, and Toxicity properties.",
      badge: "Safety Assessment",
      benefits: ["Toxicity Prediction", "Pharmacokinetics", "Safety Profiling"]
    },
    {
      icon: Zap,
      title: "MINI Tab Report",
      description: "Statistical analysis and quality control reporting using Minitab software solutions.",
      badge: "Quality Control",
      benefits: ["Process Control", "Statistical Modeling", "Quality Analysis"]
    },
    {
      icon: Cog,
      title: "Matlab Report",
      description: "Advanced mathematical modeling and simulation analysis using MATLAB platform.",
      badge: "Mathematical Modeling",
      benefits: ["Simulation Analysis", "Algorithm Development", "Data Processing"]
    },
    {
      icon: FileText,
      title: "Graph Pad Prism Report",
      description: "Biostatistics and graphical analysis using GraphPad Prism for research data visualization.",
      badge: "Data Visualization",
      benefits: ["Statistical Graphs", "Biostatistics", "Publication Ready Figures"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Specialized Reports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analytical reports and data analysis services designed to support 
            your pharmaceutical research and development needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={`
                relative overflow-hidden group
                shadow-2xl border-0 transition-all duration-300 hover:scale-105 hover:shadow-3xl
                ${glassStyle}
                ${borderGradients[index % borderGradients.length]}
              `}
              style={{ boxShadow: '0 10px 32px 0 rgba(0,0,0,0.14)' }}
            >
              {/* White overlay for mild glass effect */}
              <div className="absolute inset-0 pointer-events-none z-1"></div>

              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                    bg-gradient-to-br ${iconGradients[index % iconGradients.length]} shadow-lg
                  `}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-white/80 text-gray-800 hover:bg-white/90 shadow border border-white">
                    {solution.badge}
                  </Badge>
                </div>
                <CardTitle className={`text-lg font-bold text-gray-900 leading-tight ${textShadow}`}>
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className={`mb-6 leading-relaxed text-sm text-gray-700 ${textShadow}`}>
                  {solution.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-900 mb-3">Key Features:</div>
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
