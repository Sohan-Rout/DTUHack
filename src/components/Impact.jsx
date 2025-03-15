import React from "react";

const ImpactAndBenefits = () => {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Impact & <span className="text-amber-600">Benefits</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-neutral-300 text-center max-w-2xl mx-auto mb-12">
          See how Rubble Radar makes a difference in search and rescue operations.
        </p>

        {/* Difference Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Column 1: Before */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-amber-600 mb-6 text-center">
              Before Rubble Radar
            </h3>
            <ul className="space-y-4">
              <li className="text-neutral-300">
                <strong>Delayed Response:</strong> Rescue teams often arrive late due to lack of real-time data.
              </li>
              <li className="text-neutral-300">
                <strong>Inefficient Searches:</strong> Manual searches are time-consuming and often miss survivors.
              </li>
              <li className="text-neutral-300">
                <strong>High Costs:</strong> Traditional methods require expensive equipment and manpower.
              </li>
              <li className="text-neutral-300">
                <strong>Limited Accuracy:</strong> Existing systems provide incomplete or inaccurate data.
              </li>
              <li className="text-neutral-300">
                <strong>Environmental Impact:</strong> Non-renewable energy sources are often used, harming the environment.
              </li>
            </ul>
          </div>

          {/* Column 2: After */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-amber-600 mb-6 text-center">
              With Rubble Radar
            </h3>
            <ul className="space-y-4">
              <li className="text-neutral-300">
                <strong>Real-Time Monitoring:</strong> Rescue teams receive instant updates, enabling faster responses.
              </li>
              <li className="text-neutral-300">
                <strong>Efficient Searches:</strong> Advanced technology pinpoints survivors quickly and accurately.
              </li>
              <li className="text-neutral-300">
                <strong>Cost-Effective:</strong> Our solution reduces the need for expensive equipment and manpower.
              </li>
              <li className="text-neutral-300">
                <strong>High Accuracy:</strong> Rubble Radar provides precise data, improving rescue outcomes.
              </li>
              <li className="text-neutral-300">
                <strong>Eco-Friendly:</strong> We use renewable energy sources, minimizing environmental impact.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAndBenefits;