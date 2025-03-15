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
              Impact
            </h3>
            <ul className="space-y-4">
              <li className="text-neutral-300">
                <strong>Enhanced Search and Rescue Efficiency:</strong> Faster victim detection: Thermal imaging detects heat signatures, and GPR
penetrates rubble to identify buried bodies.
,⁠Reduced search time: Drones cover large areas quickly, reducing the time to
locate victims or survivors.
 Access to hazardous areas: Drones can reach unsafe locations, keeping
rescuers out of harm’s way.
              </li>
              <li className="text-neutral-300">
                <strong>Increased Safety for Workers:</strong> Real-time worker Tracking: LoRo-enabled helmets and wristbands transmit location and vitals, ensuring worker safety.
                Improved communication: LoRa technology works in remote or disrupted areas, ensuring constant communication.
                Health monintoring: workers vital signs (e.g., heart rate, body temprature) are tracked, preventing injuries or heat stress.
                proactive injury prevention: Immediate intervention if abnoraml vitals are detected, reducing the risk of accidents.
                
              </li>
              <li className="text-neutral-300">
                <strong>Support for Remote or Under-Resourced :</strong> Connectivity in distrupted areas : LoRa technology ensures communication even when cellular networks are down.
                Aid for inacccesible location : Drones Help Reach Remote or difficult-to-access locations, aiding recovery in challenging enviroments
              </li>
              
            </ul>
          </div>

          {/* Column 2: After */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-amber-600 mb-6 text-center">
              Benifits
            </h3>
            <ul className="space-y-4">
              <li className="text-neutral-300">
                <strong>Improved efficiency in search and rescue operations:</strong> Enhanced worker safety and health monitoring,Faster, Data-driven Decision-making, safer and more effective rescue in hazardous conditions and cost-efffective and scalable rescue solutions,ongoing support for post-disaster recovery
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAndBenefits;