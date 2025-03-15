import React from "react";

const About = () => {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          About <span className="text-amber-600">Us</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-neutral-300 text-center max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Grid of Features/Skills */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px]">
            {/* Feature 1 */}
            <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-amber-600 mb-4">Mine Collapse</h3>
              <p className="text-neutral-300">
                LoRa transceiver fitted in safety helmets and wrist brands. User can fetch the data from our dashboard which includes exact geolocation and details like identity and health condition of the worker.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-amber-600 mb-4">Building Collapse</h3>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;