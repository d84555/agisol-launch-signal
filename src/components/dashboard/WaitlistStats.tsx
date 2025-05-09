
import React from 'react';
import { Button } from '@/components/ui/button';

interface WaitlistStatsProps {
  userCount: number;
}

const WaitlistStats: React.FC<WaitlistStatsProps> = ({ userCount }) => {
  return (
    <div className="text-center mt-12">
      <p className="text-xl mb-6">
        Current waitlist: <span className="font-bold">{userCount.toLocaleString()} users</span>
      </p>
      
      <Button className="px-8 py-6 bg-gray-900 hover:bg-black transition-colors">
        Want to move up the waitlist?
      </Button>
    </div>
  );
};

export default WaitlistStats;
