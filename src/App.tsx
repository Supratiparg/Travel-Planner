import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import PopularItineraries from './components/PopularItineraries';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
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