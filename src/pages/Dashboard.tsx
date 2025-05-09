
import React from 'react';
import Header from '@/components/layout/Header';
import CountdownTimer from '@/components/dashboard/CountdownTimer';
import WaitlistStats from '@/components/dashboard/WaitlistStats';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();
  
  // Set launch date to June 1st, 2025 at 12:00 PM PT
  const launchDate = new Date('2025-06-01T12:00:00-07:00');
  
  // Updated waitlist count
  const waitlistCount = 300;
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-orange to-brand-purple">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome to agisol.ai</h1>
              <p className="text-xl text-gray-600">
                We're launching on June 1st, 2025 at 12:00 PM PT
              </p>
            </div>
            
            <CountdownTimer targetDate={launchDate} />
            <WaitlistStats userCount={waitlistCount} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
