import { ArrowRight, Beaker, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-100 text-gray-900 dark:from-slate-900 dark:via-gray-950 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-slate-800/60 rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-md backdrop-blur-sm">
                <Beaker className="w-4 h-4 text-cyan-500" />
                <span className="text-sm font-medium text-cyan-700 dark:text-cyan-200">AI-Powered Formulation Solutions</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Revolutionize Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">
                  Product Development
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 dark:text-blue-100 leading-relaxed max-w-2xl">
                Accelerate your formulation development with our AI-powered ecosystem. Reduce errors, save time, and streamline your approval process across pharmaceutical, cosmetic, herbal, and perfume industries.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 h-auto shadow-lg">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-500">85%</div>
                <div className="text-sm text-gray-600">Time Reduction</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">90%</div>
                <div className="text-sm text-gray-600">AI Analysis</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-500">99%</div>
                <div className="text-sm text-gray-600">Optimized AI Data</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white/70 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-cyan-200/70 to-blue-200/70 dark:from-cyan-600/30 dark:to-blue-700/20 rounded-lg p-4 border border-cyan-400/30">
                  <TrendingUp className="w-8 h-8 text-cyan-500 mb-2" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Efficiency Boost</div>
                </div>
                <div className="bg-gradient-to-br from-green-200/70 to-emerald-200/70 dark:from-green-700/20 dark:to-emerald-700/20 rounded-lg p-4 border border-green-400/30">
                  <Beaker className="w-8 h-8 text-green-500 mb-2" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Smart Formulation</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-blue-100">AI-Powered Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-blue-100">Regulatory Compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-blue-100">Real-time Optimization</span>
                </div>
              </div>
            </div>
            {/* Decorative soft glowing gradients for subtle interest */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-10 blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 blur-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
