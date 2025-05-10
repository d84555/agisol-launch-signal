
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 z-0"></div>
      
      <div className="container relative z-10 px-6 py-16 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            We're building something powerful, modern, and developer-first.
          </h1>
          <p className="mb-10 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            No clunky CMS. No bloated themes. Just pure signal — your work, your way.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={() => navigate('/signup')}
              className="w-full sm:w-auto text-lg py-6 px-8 bg-white text-brand-purple hover:bg-white/90 transition-all"
            >
              Sign Up
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto text-lg py-6 px-8 text-white border-white hover:bg-white/10 transition-all"
            >
              Sign In
            </Button>
          </div>
          
          <p className="text-white/80 text-sm animate-bounce-subtle">
            Join early — we're launching soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
