
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const Header: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  return (
    <header className="py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-gray-900">agisol.ai</span>
            </Link>
          </div>
          
          <div>
            {!user ? (
              <div className="flex gap-4">
                {location.pathname !== '/login' && (
                  <Button variant="outline" asChild>
                    <Link to="/login">Sign In</Link>
                  </Button>
                )}
                
                {location.pathname !== '/signup' && (
                  <Button asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {location.pathname !== '/dashboard' && (
                  <Button variant="outline" asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>
                )}
                
                <Button variant="ghost" onClick={logout}>
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
