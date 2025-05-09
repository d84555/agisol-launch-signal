
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface AdminAuthProps {
  onAuth: () => void;
}

const AdminAuth: React.FC<AdminAuthProps> = ({ onAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Using fixed credentials as requested
    if (username === 'agisoladmin' && password === 'm9N8zgA7RLA4rgh77a') {
      setTimeout(() => {
        setIsLoading(false);
        // Store authenticated state in session storage
        sessionStorage.setItem('adminAuthed', 'true');
        onAuth();
        toast({
          title: "Authentication successful",
          description: "Welcome to the admin panel"
        });
      }, 800); // Simulate network request
    } else {
      setTimeout(() => {
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Authentication failed",
          description: "Invalid username or password"
        });
      }, 800);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-12">
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl">Admin Authentication</CardTitle>
          <CardDescription>Enter your admin credentials to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">Username</label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter admin username"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter admin password"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Authenticating...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAuth;
