import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    tripType: 'Luxury Getaway to Udaipur',
    comment: 'The perfect blend of luxury and culture. Every detail was thoughtfully planned!'
  },
  {
    id: '2',
    name: 'Rahul Mehta',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    tripType: 'Adventure Trek in Ladakh',
    comment: 'An incredible experience that pushed my boundaries. The local insights were invaluable.'
  },
  {
    id: '3',
    name: 'Anjali Patel',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    tripType: 'Wellness Retreat in Kerala',
    comment: 'Found the perfect balance of relaxation and exploration. Highly recommended!'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          What Our Travelers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-indigo-600">{testimonial.tripType}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}