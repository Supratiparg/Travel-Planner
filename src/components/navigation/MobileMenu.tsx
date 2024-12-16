import React from 'react';
import { NavLinks } from './NavLinks';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      <div className="fixed right-0 top-0 bottom-0 w-64 bg-gray-900 p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-4">
          <NavLinks onItemClick={onClose} />
        </nav>
      </div>
    </div>
  );
}