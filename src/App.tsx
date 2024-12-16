import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import PopularItineraries from './components/PopularItineraries';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Form from './components/Form';

const destinations = ['Kerala', 'Ladakh', 'Rajasthan', 'Goa', 'Karnataka', 'Himachal Pradesh'];
const tripTypes = ['Luxury', 'Budget', 'Wellness', 'Adventure', 'Cultural'];
const durations = [3, 5, 7, 'Custom'];

export default function App() {
  const [preferences, setPreferences] = React.useState({});

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section>
            <Form 
              destinations={destinations} 
              tripTypes={tripTypes} 
              durations={durations} 
              preferences={preferences} 
              setPreferences={setPreferences} 
              onSearch={(preferences) => { 
                // Handle the search logic here
                console.log('Search preferences:', preferences);
              }} 
            />
          </section>
          <section id="itineraries">
            <PopularItineraries />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="contact">
            <Footer />
          </section>
        </main>
      </div>
    </AuthProvider>
  );
}
