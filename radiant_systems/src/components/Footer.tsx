import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  const { toast } = useToast();

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText('npm install -g radiant-cli');
      toast({
        title: "Copied to clipboard",
        description: "CLI installation command copied successfully",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the command manually",
        variant: "destructive",
      });
    }
  };

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Training', href: '/training' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Support', href: '/support' },
    { label: 'About', href: '/about' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/radiant-systems', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/radiantsystems', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/radiant-systems', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@radiantsystems.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="space-y-12">
          {/* Brand and CLI Section */}
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-teal-400 mb-2">Radiant Systems</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Empowering organizations with intelligent automation and seamless integration solutions 
                that transform complex workflows into streamlined operations.
              </p>
            </div>
            
            {/* CLI Installation */}
            <div className="bg-slate-800 rounded-lg p-6 max-w-md mx-auto">
              <h4 className="text-lg font-semibold mb-3 text-teal-400">Quick Start</h4>
              <div className="flex items-center gap-2 bg-slate-700 rounded px-3 py-2">
                <code className="text-sm text-slate-200 flex-1">npm install -g radiant-cli</code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopyCommand}
                  className="text-teal-400 hover:text-teal-300 hover:bg-slate-600 p-1 h-auto"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="max-w-4xl mx-auto">
            <nav className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-slate-300 hover:text-teal-400 transition-colors duration-200 py-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Connect With Us</h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-3 rounded-full bg-slate-800 text-slate-300",
                      "hover:bg-teal-600 hover:text-white",
                      "transition-all duration-200 transform hover:scale-105"
                    )}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div className="text-center sm:text-left">
              <p>&copy; 2024 Radiant Systems. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-center">
              <Link 
                to="/privacy" 
                className="hover:text-teal-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-teal-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                to="/cookies" 
                className="hover:text-teal-400 transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;