
import React from 'react';
import Header from '@/components/layout/Header';
import AuthForm from '@/components/auth/AuthForm';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { NotificationService, UserStore } from '@/services/NotificationService';

const SignupPage: React.FC = () => {
  const { signup } = useAuth();
  const { toast } = useToast();
  
  const handleSignup = async (data: { email: string; password: string; name?: string }) => {
    try {
      if (!data.name) return;
      
      // Save user email to storage
      UserStore.saveUserEmail(data.email);
      
      // Attempt to send notification email
      NotificationService.sendSignupNotification(data.email)
        .then(success => {
          if (!success) {
            console.warn('Email notification could not be sent. SMTP may not be configured.');
          }
        });
      
      // Complete the signup process
      await signup(data.name, data.email, data.password);
      
      toast({
        title: "Account created!",
        description: "Welcome to agisol.ai! Your account has been created successfully."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "There was a problem creating your account. Please try again."
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
            <h1 className="text-3xl font-bold mb-2 text-white">Join the waitlist</h1>
            <p className="text-gray-300">Create your account to secure your spot</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border border-white/20">
            <AuthForm type="signup" onSubmit={handleSignup} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
