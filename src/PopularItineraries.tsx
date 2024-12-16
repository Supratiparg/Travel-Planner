import React from 'react';
import type { Itinerary } from '../types';

const popularItineraries: Itinerary[] = [
  {
    id: '1',
    destination: 'Kerala',
    type: 'Wellness',
    duration: 5,
    cost: 45000,
    highlights: ['Ayurvedic Spa', 'Houseboat Stay', 'Tea Plantations'],
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944'
  },
  {
    id: '2',
    destination: 'Rajasthan',
    type: 'Luxury',
    duration: 7,
    cost: 85000,
    highlights: ['Palace Stay', 'Desert Safari', 'Royal Dining'],
    imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245'
  },
  {
    id: '3',
    destination: 'Ladakh',
    type: 'Adventure',
    duration: 6,
    cost: 55000,
    highlights: ['Monastery Trek', 'Pangong Lake', 'Mountain Biking'],
    imageUrl: 'https://images.unsplash.com/photo-1635255506105-b74adbd94026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFkYWtofGVufDB8fDB8fHww'
  },
  {
    id: '4',
    destination: 'Karnataka',
    type: 'Heritage',
    duration: 5,
    cost: 35000,
    highlights: ['Hampi Ruins', 'Mysore Palace', 'Coffee Plantations'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730337612-8bd916249e30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2FybmF0YWthfGVufDB8fDB8fHww'
  },
  {
    id: '5',
    destination: 'Goa',
    type: 'Cultural',
    duration: 4,
    cost: 25000,
    highlights: ['Beach Yoga', 'Spice Plantations', 'Portuguese Heritage'],
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2'
  }
];

export default function PopularItineraries() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Popular Itineraries
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularItineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={itinerary.imageUrl}
                alt={itinerary.destination}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {itinerary.destination}
                  </h3>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {itinerary.type}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Duration:</span> {itinerary.duration} Days
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Cost:</span> ₹{itinerary.cost.toLocaleString()}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {itinerary.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  View Full Itinerary
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}