
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
  type: 'login' | 'signup';
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const data = type === 'signup' ? { email, password, name } : { email, password };
      await onSubmit(data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {type === 'signup' && (
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete={type === 'signup' ? 'new-password' : 'current-password'}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-brand-gradient hover:opacity-90 transition-opacity"
          disabled={loading}
        >
          {loading ? 'Please wait...' : type === 'login' ? 'Sign In' : 'Sign Up'}
        </Button>
        
        <div className="text-center text-sm">
          {type === 'login' ? (
            <p>
              Don't have an account?{' '}
              <a onClick={() => navigate('/signup')} className="text-brand-purple cursor-pointer hover:underline">
                Sign up
              </a>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <a onClick={() => navigate('/login')} className="text-brand-purple cursor-pointer hover:underline">
                Sign in
              </a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
