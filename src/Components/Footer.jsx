import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Hailey Calder</h2>
          <p className="text-gray-400 text-sm">
            Professional editing and publishing strategy helping authors
            transform manuscripts into publication-ready books.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#team">Meet the Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Contact</h3>

          <p className="text-gray-400 text-sm">
            haileydcalder@gmail.com <br/>
          </p>

          <p className="text-gray-400 text-sm mt-2">
            120 Adelaide Street West <br/>
            Suite 2500 <br/>
            Toronto, ON M5H 1T1 Canada
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-5">
        © 2026 Hailey Calder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;