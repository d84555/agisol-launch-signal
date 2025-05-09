
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const Header: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  return (
    <header className="py-4 px-6 bg-white/10 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-white">agisol.ai</span>
            </Link>
          </div>
          
          <div>
            {!user ? (
              <div className="flex gap-4">
                {location.pathname !== '/signup' && (
                  <Button className="bg-brand-purple hover:bg-brand-purple/90" asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                )}
                
                {location.pathname !== '/login' && (
                  <Button 
                    variant="outline" 
                    className="text-white border-white bg-white/10 hover:bg-white/20" 
                    asChild
                  >
                    <Link to="/login">Sign In</Link>
                  </Button>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {location.pathname !== '/dashboard' && (
                  <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>
                )}
                
                <Button variant="ghost" onClick={logout} className="text-white hover:bg-white/10">
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
