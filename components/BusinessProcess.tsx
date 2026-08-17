'use client';

import { 
  Search, 
  Target, 
  Rocket, 
  TrendingUp, 
  Lightbulb, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Award,
  CheckCircle2,
  Globe,
  ArrowRight
} from 'lucide-react';

const processSteps = [
  {
    title: 'Discovery',
    description: 'Deep dive into your business landscape to uncover opportunities and understand your unique challenges.',
    features: [
      { icon: Search, label: 'Market Research' },
      { icon: Users, label: 'Audience Analysis' },
      { icon: Lightbulb, label: 'Gap Identification' }
    ]
  },
  {
    title: 'Strategy',
    description: 'Craft a comprehensive roadmap with clear milestones and measurable KPIs for success.',
    features: [
      { icon: Target, label: 'Goal Setting' },
      { icon: BarChart3, label: 'Data Planning' },
      { icon: Globe, label: 'Channel Selection' }
    ]
  },
  {
    title: 'Execution',
    description: 'Implement precision campaigns with continuous optimization for maximum impact and ROI.',
    features: [
      { icon: Rocket, label: 'Campaign Launch' },
      { icon: Zap, label: 'Real-time Optimization' },
      { icon: CheckCircle2, label: 'Quality Assurance' }
    ]
  },
  {
    title: 'Growth',
    description: 'Scale successful initiatives and refine strategies for sustainable long-term business growth.',
    features: [
      { icon: TrendingUp, label: 'Performance Scaling' },
      { icon: Award, label: 'ROI Maximization' },
      { icon: Shield, label: 'Risk Mitigation' }
    ]
  }
];

const keyAspects = [
  { icon: Award, label: 'Industry-Proven Methodology' },
  { icon: Target, label: 'Precision Targeting' },
  { icon: Zap, label: 'Rapid Implementation' },
  { icon: TrendingUp, label: 'Long-Term Sustainable Growth' },
  { icon: Shield, label: 'Data-Driven Results' }
];

export default function BusinessProcess() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FECB0F] opacity-5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-[#FECB0F]">Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A systematic approach to transforming your business through data-driven strategies
          </p>
        </div>

        {/* Four Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-[#FECB0F] transition-all duration-300 hover:shadow-lg hover:shadow-[#FECB0F]/10"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#FECB0F] rounded-full flex items-center justify-center text-black font-bold text-sm">
                {index + 1}
              </div>

              {/* Step Title */}
              <h3 className="text-2xl font-bold mb-3 text-[#FECB0F]">{step.title}</h3>
              
              {/* Step Description */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Features with Icons */}
              <div className="space-y-3">
                {step.features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FECB0F]/10 flex items-center justify-center group-hover:bg-[#FECB0F]/20 transition-colors">
                        <Icon className="w-4 h-4 text-[#FECB0F]" />
                      </div>
                      <span className="text-gray-400 text-sm">{feature.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Arrow indicator on desktop */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-[#FECB0F]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-16" />

        {/* Key Aspects Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {keyAspects.map((aspect, index) => {
            const Icon = aspect.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-b from-gray-900/50 to-transparent border border-gray-800/50 hover:border-[#FECB0F]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#FECB0F]/10 flex items-center justify-center mb-3 group-hover:bg-[#FECB0F]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#FECB0F]" />
                </div>
                <span className="text-gray-300 text-sm font-medium">{aspect.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
