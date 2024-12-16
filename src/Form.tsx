import React from 'react';
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

const Form: React.FC<FormProps> = ({ destinations, tripTypes, durations, preferences, setPreferences, onSearch }) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(preferences);
  };

  return (
    <section className="py-8 px-4">
      <form 
        onSubmit={handleSearch} 
        className="w-full max-w-6xl bg-white rounded-2xl shadow-xl border border-gray-300 p-4 md:p-8 mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Destination */}
          <div className="relative">
            <label className="absolute -top-6 left-0 text-gray-700 text-sm">Destination</label>
            <div className="flex items-center bg-gray-100 rounded-lg p-3">
              <MapPin className="text-gray-500 mr-2" size={20} />
              <select 
                value={preferences.destination || ''} 
                onChange={(e) => setPreferences(prev => ({...prev, destination: e.target.value}))} 
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
              >
                <option value="" className="text-black">Where to?</option>
                {destinations.map(dest => (
                  <option key={dest} value={dest} className="text-black">{dest}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Trip Type */}
          <div className="relative">
            <label className="absolute -top-6 left-0 text-gray-700 text-sm">Trip Type</label>
            <div className="flex items-center bg-gray-100 rounded-lg p-3">
              <Users className="text-gray-500 mr-2" size={20} />
              <select 
                value={preferences.tripType || ''} 
                onChange={(e) => setPreferences(prev => ({...prev, tripType: e.target.value}))} 
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
              >
                <option value="" className="text-black">Type of Trip</option>
                {tripTypes.map(type => (
                  <option key={type} value={type} className="text-black">{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Duration From and To Dates */}
          <div className="relative">
            <label className="absolute -top-6 left-0 text-gray-700 text-sm">Duration</label>
            <div className="flex flex-col sm:flex-row gap-3 bg-gray-100 rounded-lg p-3">
              <div className="flex items-center w-full">
                <Calendar className="text-gray-500 mr-2" size={20} />
                <div className="w-full">
                  <input 
                    type="text" 
                    placeholder="Start Date"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.type = 'text';
                        e.target.placeholder = 'Start Date';
                      }
                    }}
                    value={preferences.duration?.from || ''} 
                    onChange={(e) => setPreferences(prev => ({
                      ...prev, 
                      duration: { 
                        ...prev.duration, 
                        from: e.target.value 
                      } 
                    }))}
                    className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
              <div className="flex items-center w-full">
                <Calendar className="text-gray-500 mr-2" size={20} />
                <div className="w-full">
                  <input 
                    type="text" 
                    placeholder="End Date"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.type = 'text';
                        e.target.placeholder = 'End Date';
                      }
                    }}
                    value={preferences.duration?.to || ''} 
                    onChange={(e) => setPreferences(prev => ({
                      ...prev, 
                      duration: { 
                        ...prev.duration, 
                        to: e.target.value 
                      } 
                    }))}
                    className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
                    min={preferences.duration?.from || new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="relative">
            <label className="absolute -top-6 left-0 text-gray-700 text-sm">Budget</label>
            <div className="flex items-center bg-gray-100 rounded-lg p-3">
              <IndianRupee className="text-gray-500 mr-2" size={20} />
              <input 
                type="number" 
                placeholder="Budget" 
                value={preferences.budget || ''} 
                onChange={(e) => setPreferences(prev => ({...prev, budget: Number(e.target.value)}))} 
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          {/* Number of People */}
          <div className="relative">
            <label className="absolute -top-6 left-0 text-gray-700 text-sm">Number of People</label>
            <div className="flex items-center bg-gray-100 rounded-lg p-3">
              <Users className="text-gray-500 mr-2" size={20} />
              <input 
                type="number"
                placeholder="Number of People"
                value={preferences.numberOfPeople || ''}
                onChange={(e) => setPreferences(prev => ({...prev, numberOfPeople: Number(e.target.value)}))}
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-5 flex justify-center items-end">
            <button 
              type="submit" 
              className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center text-sm"
            >
              <Search className="mr-2" size={16} />
              Explore
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;