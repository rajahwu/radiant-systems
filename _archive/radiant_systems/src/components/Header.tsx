import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Systems', href: '#systems' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Training', href: '#training' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLinks = ({ className = "", onClick }: { className?: string; onClick?: () => void }) => (
    <nav className={cn("flex gap-8", className)}>
      {navigationItems.map((item) => (
        <button
          key={item.label}
          onClick={() => {
            handleNavClick(item.href);
            onClick?.();
          }}
          className="text-gray-700 hover:text-[#218D8D] transition-colors duration-200 font-medium"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#218D8D] to-[#1a7070] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Radiant Systems</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <Button 
                onClick={() => handleNavClick('#contact')}
                className="bg-[#218D8D] hover:bg-[#1a7070] text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Get Started
              </Button>
            </div>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden p-2"
                  onClick={() => setIsOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#218D8D] to-[#1a7070] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">R</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">Radiant Systems</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="p-2"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-col space-y-6 mt-8">
                    {navigationItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          handleNavClick(item.href);
                          setIsOpen(false);
                        }}
                        className="text-left text-lg text-gray-700 hover:text-[#218D8D] transition-colors duration-200 font-medium py-2"
                      >
                        {item.label}
                      </button>
                    ))}
                    
                    <div className="pt-6 border-t">
                      <Button 
                        onClick={() => {
                          handleNavClick('#contact');
                          setIsOpen(false);
                        }}
                        className="w-full bg-[#218D8D] hover:bg-[#1a7070] text-white py-3 rounded-lg transition-colors duration-200"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;