import React, { useRef } from 'react';
import { Search, MapPin, Calendar, Users, IndianRupee } from 'lucide-react';
import type { TripPreferences } from '../types';

interface FormProps {
  destinations: string[];
  tripTypes: string[];
  durations: (number | string)[];
  preferences: Partial<TripPreferences>;
  setPreferences: React.Dispatch<React.SetStateAction<Partial<TripPreferences>>>;
  onSearch: (preferences: Partial<TripPreferences>) => void;
}

const Form: React.FC<FormProps> = ({ 
  destinations, 
  tripTypes, 
  durations, 
  preferences, 
  setPreferences, 
  onSearch 
}) => {
  const startDateInputRef = useRef<HTMLInputElement>(null);
  const endDateInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(preferences);
  };

  const openDatePicker = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  const todayDate = new Date().toISOString().split('T')[0];

  return (
    <section className="py-8 px-4 w-full">
      <form 
        onSubmit={handleSearch} 
        className="w-full bg-white rounded-2xl shadow-xl border border-gray-300 p-4 md:p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Destination */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
            <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
              <MapPin className="text-gray-500 mr-2" size={20} />
              <select 
                value={preferences.destination || ''} 
                onChange={(e) => setPreferences(prev => ({...prev, destination: e.target.value}))} 
                className="w-full bg-transparent text-gray-800 focus:outline-none"
              >
                <option value="" className="text-gray-500">Where to?</option>
                {destinations.map(dest => (
                  <option key={dest} value={dest} className="text-black">{dest}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Trip Type */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Trip Type</label>
            <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
              <Users className="text-gray-500 mr-2" size={20} />
              <select 
                value={preferences.tripType || ''} 
                onChange={(e) => setPreferences(prev => ({...prev, tripType: e.target.value}))} 
                className="w-full bg-transparent text-gray-800 focus:outline-none"
              >
                <option value="" className="text-gray-500">Type of Trip</option>
                {tripTypes.map(type => (
                  <option key={type} value={type} className="text-black">{type}</option>
                ))}
              </select>
            </div>
          </div>

        {/* Duration */}
        <div className="relative">
  <label className="block text-sm font-medium text-gray-700 mb-2">Trip Dates</label>
  <div className="grid grid-cols-2 gap-2 bg-gray-50 rounded-lg border border-gray-200 p-3">
    {/* Start Date */}
    <div className="relative flex items-center">
      <div 
        onClick={() => openDatePicker(startDateInputRef)} 
        className="absolute left-2 cursor-pointer text-gray-500"
      >
        📅
      </div>
      <input 
        ref={startDateInputRef}
        type="text" // Change to "text" for better placeholder control
        placeholder="Start date"
        value={preferences.duration?.from || ''} 
        onFocus={(e) => (e.target.type = 'date')} // Switch to date picker on focus
        onBlur={(e) => (e.target.type = 'text')} // Switch back to text when focus is lost
        onChange={(e) => setPreferences(prev => ({
          ...prev, 
          duration: { 
            ...prev.duration, 
            from: e.target.value 
          } 
        }))} 
        className="w-full pl-9 pr-2 py-1 bg-transparent text-gray-800 text-sm focus:outline-none"
        min={todayDate}
      />
    </div>
    
    {/* End Date */}
    <div className="relative flex items-center">
      <div 
        onClick={() => openDatePicker(endDateInputRef)} 
        className="absolute left-2 cursor-pointer text-gray-500"
      >
        📅
      </div>
      <input 
        ref={endDateInputRef}
        type="text" // Change to "text" for better placeholder control
        placeholder="End date"
        value={preferences.duration?.to || ''} 
        onFocus={(e) => (e.target.type = 'date')} // Switch to date picker on focus
        onBlur={(e) => (e.target.type = 'text')} // Switch back to text when focus is lost
        onChange={(e) => setPreferences(prev => ({
          ...prev, 
          duration: { 
            ...prev.duration, 
            to: e.target.value 
          } 
        }))} 
        className="w-full pl-9 pr-2 py-1 bg-transparent text-gray-800 text-sm focus:outline-none"
        min={preferences.duration?.from || todayDate}
      />
    </div>
  </div>
</div>

          {/* Budget */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
            <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
              <IndianRupee className="text-gray-500 mr-2" size={20} />
              <input 
                type="number" 
                placeholder="Budget" 
                value={preferences.budget || ''} 
                onChange={(e) => setPreferences(prev => ({...prev, budget: Number(e.target.value)}))} 
                className="w-full bg-transparent text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          {/* Number of People */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
            <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 p-3">
              <Users className="text-gray-500 mr-2" size={20} />
              <input 
                type="number"
                placeholder="Number of People"
                value={preferences.numberOfPeople || ''}
                onChange={(e) => setPreferences(prev => ({...prev, numberOfPeople: Number(e.target.value)}))}
                className="w-full bg-transparent text-gray-800 focus:outline-none"
                min="1"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 flex justify-center mt-4">
            <button 
              type="submit" 
              className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <Search className="mr-2" size={20} />
              Explore Trips
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
