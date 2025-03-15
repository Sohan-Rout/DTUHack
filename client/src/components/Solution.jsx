import React from "react";

const SolutionSection = () => {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          The <span className="text-amber-600">Solution</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-neutral-300 text-center max-w-2xl mx-auto mb-12">
          Here are our innovative solutions.
        </p>

        {/* Centered Card with Pointers */}
        <div className="flex justify-center">
          <div className="bg-neutral-800 p-8 rounded-lg shadow-lg w-full max-w-3xl">
            <p className="text-white">
                <span className="text-amber-600">-  </span>
            Technologies like GPR, acoustic sensor ,vibrational sensor ,
              thermal imaging, Lo-ra sensor and drones, enable efficient
              detection of buried bodies by identifying anomalies, vibrations,
              heat, and patterns, with wearables enhancing real-time
              communication and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;