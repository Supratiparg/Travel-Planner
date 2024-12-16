import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import SignUpModal from './auth/SignUpModal';

export default function Header() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">AI Trip Planner</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSignUpOpen(true)}
              className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Sign Up
            </button>
            <button className="text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </header>
  );
}