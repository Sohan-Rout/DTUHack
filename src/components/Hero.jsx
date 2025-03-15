import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-neutral-800 to-neutral-900 min-h-screen flex items-center justify-center text-white">
      <div className="text-center max-w-4xl px-4">
        {/* Heading */}
        <h1 className="text-5xl font-medium md:text-6xl font-poppins mb-6">
          Welcome to <span className="text-amber-600">Rubble Radar</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-neutral-300 mb-8">
          Revolutionizing Search & Rescue: Smart Tech for Saving Lives.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="/get-started"
            className="bg-amber-600 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="/learn-more"
            className="bg-transparent border border-amber-600 text-amber-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-amber-700 hover:text-neutral-900 hover:border-amber-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;