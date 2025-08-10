import React from 'react';

const AboutUs = () => {
    return (
         <div className="max-w-5xl mx-auto px-4 py-12 mt-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-primary">About Us</h1>
      <p className="text-lg text-center mb-12">
        Welcome to <span className="font-semibold text-primary">TourNow!</span> — where you design your own adventure.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">🌍 What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>
            <span className="font-medium">Customized Tours:</span> Design your dream trip by picking destinations, activities, and stays.
          </li>
          <li>
            <span className="font-medium">Explore Existing Packages:</span> Discover and book community-shared packages.
          </li>
          <li>
            <span className="font-medium">Instant Booking:</span> Fast, smooth, and secure booking experience.
          </li>
          <li>
            <span className="font-medium">Manage Your Trips:</span> Add, update, or cancel your tour packages anytime.
          </li>
          <li>
            <span className="font-medium">Real-Time Updates:</span> Stay updated on availability and bookings instantly.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">👥 Who We Are</h2>
        <p className="text-base">
          We’re a team of techies and travelers who believe in personalized travel made simple. TourNow! is powered by
          the MERN stack and Firebase to bring you a secure and interactive experience.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">🚀 Our Mission</h2>
        <p className="text-base">
          To make travel <span className="font-medium">accessible</span>, <span className="font-medium">personal</span>, and <span className="font-medium">fun</span> by giving you full control of your journey.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 text-secondary">🔐 Safe & Secure</h2>
        <p className="text-base">
          Your data is protected with secure authentication and modern technology. We value your privacy and trust.
        </p>
      </section>

      <div className="mt-12 text-center">
        <p className="text-lg font-semibold text-primary">
          Start planning your next adventure — with TourNow!
        </p>
        <p className="text-base">Where your journey begins with <span className="italic">you</span>.</p>
      </div>
    </div>
    );
};

export default AboutUs;