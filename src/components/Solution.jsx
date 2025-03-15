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
            <ul className="space-y-4">
              {/* Pointer 1 */}
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 mt-1">•</span>
                <p className="text-neutral-300">
                  <strong>Complex Environments:</strong> Current systems fail to provide real-time data on structural integrity, leading to delayed responses during emergencies.
                </p>
              </li>

              {/* Pointer 2 */}
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 mt-1">•</span>
                <p className="text-neutral-300">
                  <strong>Increased Risks:</strong> In disaster-prone areas, communication systems often break down, making it difficult to coordinate rescue efforts.
                </p>
              </li>

              {/* Pointer 3 */}
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 mt-1">•</span>
                <p className="text-neutral-300">
                  <strong>Need Of Advanced Tools:</strong> Traditional monitoring systems are expensive to install and maintain, making them inaccessible for many communities.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;