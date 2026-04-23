import React from "react";

const testimonials = [
  {
    quote:
      "Working with the Ideal Success Literary team completely transformed the trajectory of my book. The strategy behind the campaign brought visibility I never thought possible.",
    author: "Romance Author, Self-Published",
    title: "Author Success Story",
  },
  {
    quote:
      "The Goodreads and advertising strategy brought my book directly to readers who actually cared about the genre. The results spoke for themselves.",
    author: "Thriller Author, Independent Publisher",
    title: "Marketing Impact",
  },
  {
    quote:
      "Ideal Success Literary helped me shape not just my book, but my identity as an author. The branding strategy gave my work a clear direction and voice.",
    author: "Literary Fiction Author",
    title: "Author Branding Transformation",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-900 scroll-mt-24">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16 text-orange-500">
          What Authors Say{" "}
          <span className="text-white">About Our Work</span>
        </h2>

        <div className="space-y-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border-l-4 border-orange-500 bg-black rounded-r-lg px-8 py-8 shadow-lg"
            >
              <h3 className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
                {t.title}
              </h3>

              <blockquote className="text-white text-xl italic leading-relaxed">
                <span className="text-orange-500 text-5xl font-serif leading-none mr-1">"</span>
                {t.quote}
                <span className="text-orange-500 text-5xl font-serif leading-none ml-1">"</span>
              </blockquote>

              <p className="text-orange-400 font-semibold mt-6">
                — {t.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
