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
        In disaster scenarios like mine and building collapses, timely and accurate victim detection is crucial for saving lives. Rubble Radar is an innovative life-saving gadget designed to enhance Collapsed Structure Search and Rescue (CSSR) operations through cutting-edge technology.

Using LoRa transceivers, thermal imaging, and Ground Penetrating Radar (GPR), Rubble Radar helps rescue teams locate victims with precision. Drones equipped with advanced sensors can scan rubble, detect air voids, and deploy seismic sensors to improve search efficiency. Additionally, our dashboard system provides real-time data, including geolocation, identity, and health conditions, ensuring faster response times.
        </p>

        {/* Grid of Features/Skills */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px]">
            {/* Feature 1 */}
            <div className="bg-neutral-800 p-6 rounded-lg shadow-lg bounce-on-hover transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-amber-600 mb-4">Mine Collapse</h3>
              <p className="text-neutral-300">
                LoRa transceiver fitted in safety helmets and wrist brands. User can fetch the data from our dashboard which includes exact geolocation and details like identity and health condition of the worker.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-neutral-800 p-6 rounded-lg shadow-lg bounce-on-hover transition-transform duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-amber-600 mb-4">Building Collapse</h3>
              <p className="text-neutral-300">
              Drones equipped with thermal imaging and GPR (Ground
Penetration Radar) will be deployed to survey large areas of
rubble and concrete.
in case of large sized rubble GPR technology will detect Air voids
Rotary wing drones like Quadcopters will navigate in tight spaces
and drop small seismic sensors like acoustic and vibrational
sensors.
thermal imaging can be used to detect bodies which are not very
deep or are partially exposed .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;