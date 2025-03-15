import React from "react";

const FutureCards = () => {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          <span className="text-amber-600">Features</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-neutral-300 text-center max-w-2xl mx-auto mb-12">
          Explore the exciting features and innovations we are working on to make your experience even better.
        </p>

        {/* Grid of Future Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl bounce-on-hover transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-amber-600 mb-4">Thermal Imaging</h3>
            <p className="text-neutral-300">
              We are integrating advanced AI to provide smarter and more personalized solutions for our users.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl bounce-on-hover transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-amber-600 mb-4">Ground Penetrating Radar</h3>
            <p className="text-neutral-300">
              Expanding our IoT capabilities to connect more devices and provide seamless automation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl bounce-on-hover transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-amber-600 mb-4">LoRa Transmitter and Reciever for mishappenings in mines</h3>
            <p className="text-neutral-300">
              Implementing blockchain technology to enhance data security and transparency.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl bounce-on-hover transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-amber-600 mb-4">Siesmic Sensors</h3>
            <p className="text-neutral-300">
              Committed to using renewable energy sources to power our infrastructure and reduce our carbon footprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureCards;