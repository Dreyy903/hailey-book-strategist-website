import React from "react";
import hailey from "../assets/hailey.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={hailey}
            alt="Hailey D. Calder"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-5xl text-orange-500 font-bold mb-6 text-center md:text-left">
            About Hailey Calder
          </h2>

          <p className="text-gray-300 mb-4">
            Hailey Calder is an Author Visibility Strategist and professional editor dedicated to helping authors refine their manuscripts and turn them into publication-ready works that truly stand out. With years of experience in editing, storytelling, and publishing guidance, she ensures each project achieves its full potential.
          </p>

          <p className="text-gray-300 mb-4">
            Combining meticulous editorial insight with a deep understanding of narrative structure, pacing, and character development, Hailey collaborates closely with writers to preserve their unique voice while enhancing clarity, impact, and market appeal.
          </p>

          <p className="text-gray-300">
            Beyond editing, she provides strategic guidance on publishing pathways, helping authors navigate traditional and independent publishing routes. Her mission is to empower writers to gain visibility, attract real readers, and achieve lasting momentum for their books.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;