
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-[#1A1F2C] text-white">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-8 h-8 mr-3 rounded-full bg-brand-orange flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-white">How The Waitlist Works</h2>
            </div>
            
            <ul className="space-y-8">
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-4 rounded-full bg-brand-orange/30 flex items-center justify-center text-brand-orange font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium text-white">Access is granted on a <span className="font-bold">first-come, first-served basis</span> when spots open</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-4 rounded-full bg-brand-orange/30 flex items-center justify-center text-brand-orange font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium text-white">You will receive an <span className="font-bold">email notification</span> when more spots become available</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-4 rounded-full bg-brand-orange/30 flex items-center justify-center text-brand-orange font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium text-white">Return to this page to pay and secure your spot as soon as possible</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-8 h-8 mr-3 rounded-full bg-brand-purple flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Beta Program Benefits</h2>
            </div>
            
            <ul className="space-y-8">
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-4 rounded-full bg-brand-purple/30 flex items-center justify-center text-brand-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <div>
                  <p className="font-medium text-white"><span className="font-bold">Early access</span> to all new features before general release</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-4 rounded-full bg-brand-purple/30 flex items-center justify-center text-brand-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <div>
                  <p className="font-medium text-white"><span className="font-bold">Direct feedback channel</span> with our development team</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-4 rounded-full bg-brand-purple/30 flex items-center justify-center text-brand-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <div>
                  <p className="font-medium text-white"><span className="font-bold">Influence product development</span> with your suggestions</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 mr-4 rounded-full bg-brand-purple/30 flex items-center justify-center text-brand-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <div>
                  <p className="font-medium text-white"><span className="font-bold">Special pricing</span> for early adopters when we launch</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
