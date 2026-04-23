import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Ideal Success Literary</h2>
          <p className="text-gray-400 text-sm">
            A team of publishing strategists and editors helping authors
            transform manuscripts into publication-ready books with lasting
            market visibility.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-orange-500 transition">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-orange-500 transition">Testimonials</a></li>
            <li><a href="#team" className="hover:text-orange-500 transition">Meet the Team</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm mt-2">
            120 Adelaide Street West <br />
            Suite 2500 <br />
            Toronto, ON M5H 1T1 Canada
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-5">
        © 2026 Ideal Success Literary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
