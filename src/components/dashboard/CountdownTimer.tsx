
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface CountdownProps {
  targetDate: Date;
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [refreshing, setRefreshing] = useState(false);
  
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }
  };
  
  const handleRefresh = () => {
    setRefreshing(true);
    calculateTimeLeft();
    setTimeout(() => setRefreshing(false), 600);
  };
  
  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };
  
  return (
    <div className="text-center">
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-900 rounded-md text-white">
          <span className="text-4xl font-mono font-bold">{formatNumber(timeLeft.days)}</span>
          <span className="text-xs uppercase tracking-wider mt-1">Days</span>
        </div>
        
        <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-900 rounded-md text-white">
          <span className="text-4xl font-mono font-bold">{formatNumber(timeLeft.hours)}</span>
          <span className="text-xs uppercase tracking-wider mt-1">Hours</span>
        </div>
        
        <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-900 rounded-md text-white">
          <span className="text-4xl font-mono font-bold">{formatNumber(timeLeft.minutes)}</span>
          <span className="text-xs uppercase tracking-wider mt-1">Mins</span>
        </div>
        
        <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-900 rounded-md text-white">
          <span className="text-4xl font-mono font-bold">{formatNumber(timeLeft.seconds)}</span>
          <span className="text-xs uppercase tracking-wider mt-1">Secs</span>
        </div>
      </div>
      
      <div className="mt-8">
        <Button 
          variant="outline" 
          className="bg-brand-orange/10 text-brand-orange border-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
          onClick={handleRefresh}
          disabled={refreshing}
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default CountdownTimer;
