export type TripType = 'Luxury' | 'Budget' | 'Wellness' | 'Adventure' | 'Cultural';
export type GroupType = 'Solo' | 'Couple' | 'Family' | 'Friends';

export interface TripPreferences {
  destination: string;
  tripType: TripType;
  duration: number;
  budget: number;
  groupType: GroupType;
}

export interface Itinerary {
  id: string;
  destination: string;
  type: TripType;
  duration: number;
  cost: number;
  highlights: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  tripType: string;
  comment: string;
}