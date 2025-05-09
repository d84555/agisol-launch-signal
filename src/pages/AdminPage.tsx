
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { NotificationService, SMTPConfig, UserStore } from '@/services/NotificationService';
import { useToast } from '@/hooks/use-toast';

const AdminPage: React.FC = () => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('587');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [encryption, setEncryption] = useState<'none' | 'tls' | 'ssl'>('tls');
  const [loading, setLoading] = useState(false);
  const [userEmails, setUserEmails] = useState<string[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Load existing config if available
    const config = NotificationService.getSmtpConfig();
    if (config) {
      setHost(config.host);
      setPort(config.port.toString());
      setUsername(config.username);
      setPassword(config.password);
      setEncryption(config.encryption);
    }
    
    // Load user emails
    setUserEmails(UserStore.getUserEmails());
  }, []);
  
  const handleSaveConfig = () => {
    setLoading(true);
    
    try {
      const config: SMTPConfig = {
        host,
        port: parseInt(port, 10),
        username,
        password,
        encryption
      };
      
      NotificationService.setSmtpConfig(config);
      
      toast({
        title: 'Configuration saved',
        description: 'SMTP settings have been updated successfully.'
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: 'Error saving configuration',
        description: 'Please check your input and try again.'
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6">Admin Settings</h1>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">SMTP Configuration</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="host">SMTP Host</Label>
                  <Input 
                    id="host" 
                    placeholder="smtp.example.com" 
                    value={host} 
                    onChange={(e) => setHost(e.target.value)} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="port">SMTP Port</Label>
                  <Input 
                    id="port" 
                    placeholder="587" 
                    value={port} 
                    onChange={(e) => setPort(e.target.value)} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input 
                    id="username" 
                    placeholder="user@example.com" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
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
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="encryption">Encryption</Label>
                  <Select value={encryption} onValueChange={(value: any) => setEncryption(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select encryption type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="tls">TLS</SelectItem>
                      <SelectItem value="ssl">SSL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                className="mt-6" 
                onClick={handleSaveConfig} 
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Configuration'}
              </Button>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Waitlist Users ({userEmails.length})</h2>
              
              <div className="bg-gray-50 rounded-lg p-4 max-h-80 overflow-y-auto">
                {userEmails.length > 0 ? (
                  <ul className="divide-y">
                    {userEmails.map((email, index) => (
                      <li key={index} className="py-2">{email}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-center py-4">No users have signed up yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
