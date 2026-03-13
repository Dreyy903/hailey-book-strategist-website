import React from "react";
import ashley from "../assets/ashley.jpg";
import eloide from "../assets/eloide.jpg";
import aurora from "../assets/aurora.jpg";

const Team = () => {
  return (
    <section id="team" className="py-20 px-6 bg-black text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-orange-500 mb-12">
          Meet the top brilliant <span className="text-white underline underline-offset">intellects behind Hailey's success</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Hailey */}
          <div className="flex flex-col items-center">
            <img
              src={ashley}
              alt="Ashley Greenwell"
              className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-semibold">Ashley Greenwell</h3>
            <p className="text-gray-400">Author Visibility Strategist</p>
            <p className="text-orange-500 mt-2">
              ashleygreenwell.traction@gmail.com
            </p>
          </div>

          {/* eloide */}
          <div className="flex flex-col items-center">
            <img
              src={eloide}
              alt="Elodie"
              className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-semibold">Eloide S. Helena</h3>
            <p className="text-gray-400">Publishing Consultant</p>
            <p className="text-orange-500 mt-2">
              elodieshelena@gmail.com
            </p>
          </div>

          {/* Aurora */}
          <div className="flex flex-col items-center">
            <img
              src={aurora}
              alt="Aurora"
              className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-semibold">Aurora Z. Harrington</h3>
            <p className="text-gray-400">Literary Consultant</p>
            <p className="text-orange-500 mt-2">
              aurorazharrington@gmail.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;