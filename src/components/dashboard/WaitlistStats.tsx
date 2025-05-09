
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface WaitlistStatsProps {
  userCount: number;
}

const WaitlistStats: React.FC<WaitlistStatsProps> = ({ userCount }) => {
  return (
    <div className="text-center mt-12">
      <p className="text-xl mb-6">
        Current waitlist: <span className="font-bold">{userCount.toLocaleString()} users</span>
      </p>
      
      <Button className="px-8 py-6 bg-brand-gradient text-white hover:opacity-90 transition-all flex items-center gap-2">
        <span>Want to move up the waitlist?</span>
        <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default WaitlistStats;
