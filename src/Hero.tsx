import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, IndianRupee } from 'lucide-react';
import AuthModal from './auth/AuthModal';
import type { TripPreferences } from '../types';

const destinations = ['Kerala', 'Ladakh', 'Rajasthan', 'Goa', 'Karnataka', 'Himachal Pradesh'];
const tripTypes = ['Luxury', 'Budget', 'Wellness', 'Adventure', 'Cultural'];
const durations = [3, 5, 7, 'Custom'];
const groupTypes = ['Solo', 'Couple', 'Family', 'Friends'];

export default function Hero() {
  const [preferences, setPreferences] = useState<Partial<TripPreferences>>({});
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Image with improved styling */}
        <img
  src="./src/HeroBg.png"
  alt="India Travel"
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
/>

      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
          Discover the Magic of India
        </h1>
        <p className="text-xl text-white text-center mb-8">
          Plan your perfect Indian adventure with our AI-powered trip planner
        </p>

       
        <button 
          onClick={() => setIsAuthOpen(true)}
          className="mt-6 text-white border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition-colors"
        >
          Sign Up for Exclusive Perks
        </button>
         
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      </div>
      
    </div>
  );
}
