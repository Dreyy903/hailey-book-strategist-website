export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] bg-black text-white flex items-center justify-center scroll-mt-24" >
      <div className="max-w-4xl text-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hailey Calder
          <span className="block text-orange-500 mt-2 text-3xl md:text-4xl font-medium">
            Author Visibility Strategist
          </span>
        </h1>

        {/* Subheadline / Premium Line */}
        <p className="mt-6 text-lg text-gray-400">
          Helping authors transform overlooked manuscripts into publication-ready stories
          that attract real readers and long-term visibility.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a href="#portfolio" className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            View Portfolio
          </a>

          <a href="#contact" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}