
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart, BookOpen, HeartPulse, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/journal', label: 'Journal', icon: <BookOpen className="h-5 w-5" /> },
    { path: '/dashboard', label: 'Dashboard', icon: <BarChart className="h-5 w-5" /> },
    { path: '/resources', label: 'Resources', icon: <HeartPulse className="h-5 w-5" /> },
    { path: '/emergency', label: 'Help', icon: <Phone className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white/90 backdrop-blur-md border-b border-mindease-gray-light py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-mindease-blue to-mindease-green-dark p-2 rounded-lg">
              <HeartPulse className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-mindease-blue-dark to-mindease-green-dark bg-clip-text text-transparent">
              MindEase
            </h1>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <Link 
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors",
                  location.pathname === item.path
                    ? "bg-mindease-blue-light text-mindease-blue-dark font-medium"
                    : "text-gray-600 hover:bg-mindease-gray-light"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="border-t border-mindease-gray-light py-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>MindEase - Mental Health Support for Students</p>
          <p className="mt-1">© {new Date().getFullYear()} MindEase. Created for educational purposes.</p>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-mindease-gray-light py-2 px-4 z-10">
        <div className="flex justify-between items-center">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-colors",
                location.pathname === item.path
                  ? "text-mindease-blue-dark"
                  : "text-gray-500"
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
