
import React from 'react';
import Header from '@/components/layout/Header';
import AuthForm from '@/components/auth/AuthForm';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const { toast } = useToast();
  
  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      await login(data.email, data.password);
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: "Please check your credentials and try again."
      });
      throw error;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C]">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-white">Welcome back</h1>
            <p className="text-gray-300">Sign in to access your dashboard</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border border-white/20">
            <AuthForm type="login" onSubmit={handleLogin} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
