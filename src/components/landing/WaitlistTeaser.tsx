
import React from 'react';

const WaitlistTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
            Get on the waitlist to unlock early access
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            We're carefully scaling our platform to ensure the best experience for every developer.
            Join our waitlist today to be among the first to experience agisol.ai.
          </p>
          
          <div className="relative w-full max-w-md mx-auto h-36 mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-brand-gradient animate-pulse opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
                <span className="font-mono font-bold text-2xl text-brand-purple">#01</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            Your position is determined by sign-up order and referral points
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistTeaser;
