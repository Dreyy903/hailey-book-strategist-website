import React from "react";
import projectOne from "../assets/project-one.jpg";
import projectTwo from "../assets/project-two.jpg";
import projectThree from "../assets/project-three.jpg";
import SocialProof from "./SocialProof";


const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 px-3 bg-black text-black scroll-mt-24">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12 text-orange-500">
          PORTFOLIO
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={projectOne} alt="Silent Horizon" className="w-full h-80 object-cover"/>
            <div className="p-4">
              <h3 className="font-bold text-xl text-orange-500 mb-2">Silent Horizon</h3>
              <p className="text-white">Strategic story development and concept shaping.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={projectTwo} alt="Crimson Letters" className="w-full h-80 object-cover"/>
            <div className="p-4">
              <h3 className="font-bold text-xl text-orange-500 mb-2">Crimson Letters</h3>
              <p className="text-white">Manuscript editing and refining for clarity and impact.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img src={projectThree} alt="Broken Quills" className="w-full h-80 object-cover"/>
            <div className="p-4">
              <h3 className="font-bold text-xl text-orange-500 mb-2">Broken Quills</h3>
              <p className="text-white">Creative guidance preserving the author’s voice.</p>
            </div>
          </div>

          </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mt-16 mb-12 text-orange-500 underline underline-offset">
          SOCIAL<span className="text-white"> PROOF</span>
          </h2>
          
      </div>

    <SocialProof />

    </section>
  );
};

export default Portfolio;