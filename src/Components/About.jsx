
import React from "react";
import hailey from "../assets/hailey.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src={hailey}
            alt="Hailey D. Calder — Founder"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-5xl text-orange-500 font-bold mb-6 text-center">
            About Ideal Success Literary Hub
          </h2>

          <p className="text-gray-300 mb-4">
            Ideal Success Literary is a team of publishing strategists, editors, and
            visibility experts united by one mission — helping authors turn their
            manuscripts into publication-ready works that stand out and reach the
            right readers.
          </p>

          <p className="text-gray-300 mb-4">
            Founded by Hailey Calder, an Author Visibility Strategist with years of
            experience in editing, storytelling, and publishing guidance, our team
            combines meticulous editorial insight with a deep understanding of
            narrative structure, pacing, and market positioning.
          </p>

          <p className="text-gray-300 mb-4">
            We collaborate closely with writers to preserve their unique voice while
            enhancing clarity, impact, and reader appeal. Every project is approached
            with precision and care — from manuscript refinement to strategic
            publishing roadmaps.
          </p>

          <p className="text-gray-300">
            Beyond editing, we provide strategic guidance on publishing pathways,
            helping authors navigate both traditional and independent routes. Our
            collective mission is to empower writers to gain lasting visibility,
            attract real readers, and build long-term momentum for their books.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
