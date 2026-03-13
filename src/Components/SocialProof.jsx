import React from "react";
import trailerOne from "../assets/trailer-one.mp4"
import trailerTwo from "../assets/trailer-two.mp4"
import listopiaOne from "../assets/listopia-onee.jpg";
import emailList from "../assets/email-list.jpg";
import authorBrand from "../assets/brand.jpg";

const SocialProof = () => {
  return (
    <section id="proof" className="py-3 px-6">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Trailer */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
         <video src={trailerOne} autoPlay loop muted controls className="w-full rounded-lg shadow-lg"/>

          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              Cinematic Book Trailer
            </h3>
            <p className="text-gray-300">
              A visually striking trailer designed to bring a book’s story to life
              and position it for cinematic adaptation opportunities.
            </p>
          </div>
        </div>

        {/* Listopia */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              Goodreads Listopia Placement
            </h3>
            <p className="text-gray-300">
              Strategic placement on influential Goodreads lists to increase
              organic discovery among active readers.
            </p>
          </div>

          <img
            src={listopiaOne}
            alt="Goodreads Listopia"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Facebook Ads */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={emailList}
            alt="Email List Growth"
            className="w-90 rounded-lg shadow-lg"
          />

          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              Author Email List Monetization Strategy
            </h3>
            <p className="text-gray-300">
             Your email list is more than contacts, it’s a loyal audience ready to engage with your work. We create engaging email campaigns that build connection, trust, and excitement around your releases. Readers become repeat buyers, early supporters, and brand ambassadors. The result is predictable sales growth, a stronger author-reader relationship, and a sustainable platform for future launches.
            </p>
          </div>
        </div>

        {/* Brand Positioning */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              Author Brand Positioning
            </h3>
            <p className="text-gray-300">
              Crafting a strong narrative identity that strengthens the
              author's voice, positioning, and long-term market presence.
            </p>
          </div>

          <img
            src={authorBrand}
            alt="Author Branding"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Trailer Case Study */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <video src={trailerTwo} autoPlay loop muted controls className="w-full rounded-lg shadow-lg"></video>

          <div>
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              Story-Driven Trailer Campaign
            </h3>
            <p className="text-gray-300">
              Cinematic storytelling that expands audience reach and turns
              books into compelling visual experiences.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;