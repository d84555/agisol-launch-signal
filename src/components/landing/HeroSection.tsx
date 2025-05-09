
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#1A1F2C] z-0"></div>
      <div className="absolute inset-0 opacity-20 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      
      <div className="container relative z-10 px-6 py-16 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Ideas, Built by AI
            </h1>
            <p className="mb-10 text-xl md:text-2xl text-white/90 max-w-3xl">
              Prompt, run, and deploy fully functional apps. agisol.ai is your AI full-stack engineer, handling everything from UI to deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button 
                onClick={() => navigate('/signup')}
                className="w-full sm:w-auto text-lg py-6 px-8 bg-white text-brand-purple hover:bg-white/90 transition-all"
              >
                Sign Up
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/login')}
                className="w-full sm:w-auto text-lg py-6 px-8 text-white border-white bg-white/10 hover:bg-white/20 transition-all"
              >
                Sign In
              </Button>
            </div>
            
            <p className="text-white text-2xl font-medium animate-bounce-subtle">
              Join early — we're launching soon!
            </p>
          </div>
          
          <div className="w-full max-w-lg">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 border border-white/20 shadow-xl">
              <div className="aspect-square w-full flex items-center justify-center overflow-hidden">
                {/* Updated Vibe Coding image */}
                <div className="relative w-full h-full">
                  <img 
                    src="/lovable-uploads/10ce818f-38ee-498c-a432-72866245b82a.png" 
                    alt="Vibe Coding - Person giving prompt on laptop and getting a website output" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    Vibe Coding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
