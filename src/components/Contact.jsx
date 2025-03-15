import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Contact <span className="text-amber-600">Us</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-neutral-300 text-center max-w-2xl mx-auto mb-12">
          Have questions or need assistance? Reach out to us, and we'll get back to you as soon as possible.
        </p>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Form */}
          <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-amber-600 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-black px-6 py-3 rounded-lg hover:bg-amber-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Information and Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-amber-600 mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-600 mr-4 flex-shrink-0" />
                  <p className="text-neutral-300">
                    123 Rescue Street, <br />
                    Disaster City, DC 12345
                  </p>
                </li>
                <li className="flex items-start">
                  <Mail className="h-6 w-6 text-amber-600 mr-4 flex-shrink-0" />
                  <p className="text-neutral-300">
                    <a href="mailto:info@rubbleradar.com" className="hover:text-amber-600">
                      info@rubbleradar.com
                    </a>
                  </p>
                </li>
                <li className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-600 mr-4 flex-shrink-0" />
                  <p className="text-neutral-300">
                    <a href="tel:+1234567890" className="hover:text-amber-600">
                      +1 (234) 567-890
                    </a>
                  </p>
                </li>
              </ul>
            </div>

            {/* Map (Optional) */}
            <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-amber-600 mb-6">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f7f1f7a!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633033228934!5m2!1sen!2sus"
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;