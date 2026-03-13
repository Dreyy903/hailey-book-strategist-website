import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Details */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-300 mb-6">
            If you’re an author looking to improve your book’s visibility,
            refine your manuscript, or build a stronger publishing strategy,
            feel free to reach out.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>
              <span className="text-orange-500 font-semibold">Email:</span>
              <br />
              haileydcalder@gmail.com
            </p>

            <p>
              <span className="text-orange-500 font-semibold">Address:</span>
              <br />
              120 Adelaide Street West <br />Suite 2500 <br /> Toronto, ON M5H 1T1 Canada
            </p>

            <p>
              <span className="text-orange-500 font-semibold">Response Time:</span>
              <br />
              Usually within 24–48 hours
            </p>
          </div>
        </div>


        {/* Contact Form */}
        <div className="bg-black p-8 rounded-lg shadow-lg">

          <form
            action="https://formspree.io/f/mojkljkp"
            method="POST"
            className="space-y-6"
          >

            <div>
              <label className="block mb-2 text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded bg-gray-800 text-white outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded bg-gray-800 text-white outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded bg-gray-800 text-white outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition w-full"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;