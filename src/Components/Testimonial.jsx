import React from "react";
import testimonialOne from "../assets/testimonial-one.png";
import testimonialTwo from "../assets/testimonial-two.png";


const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-800 scroll-mt-24">
      <div className="max-w-6xl mx-auto space-y-24">
        <h2 className="text-5xl font-bold text-center mb-12 text-orange-500">
          What Authors Say <span className="text-white">About Hailey's Work</span>
        </h2>
        {/* Testimonial 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={testimonialOne}
            alt="Client Testimonial"
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              Author Success Story
            </h3>
            <p className="text-white">
              “Working with Hailey completely transformed the trajectory of my
              book. The strategy behind the campaign brought visibility I never
              thought possible.”
            </p>
          </div>
        </div>

        {/* Testimonial 2 - zigzag on desktop only */}
        <div className="grid md:grid-cols-2 gap-10 items-center md:flex md:flex-row-reverse">
          <img
            src={testimonialTwo}
            alt="Client Testimonial"
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              Marketing Impact
            </h3>
            <p className="text-white">
              “The Goodreads and advertising strategy brought my book directly
              to readers who actually cared about the genre. The results spoke
              for themselves.”
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={testimonialOne}
            alt="Client Testimonial"
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              Author Branding Transformation
            </h3>
            <p className="text-white">
              “Hailey helped me shape not just my book, but my identity as an
              author. The branding strategy gave my work a clear direction and
              voice.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;