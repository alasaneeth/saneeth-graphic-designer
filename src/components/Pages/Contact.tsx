import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm('service_dqi39qk', 'template_q6c0q38', form.current, {
        publicKey: '1f0A6MZirCXRbcOak',
      })
      .then(
        () => {
          setIsSent(true);
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='contacts' className="bg-gray-100 text-gray-800 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Get in <span className="text-indigo-600">Touch</span></h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="w-full bg-indigo-600 text-white font-medium py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300 cursor-pointer"
              />
              {isSent && <p className="text-green-600 text-sm mt-2 text-center">✓ Message sent successfully!</p>}
            </form>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Dubai, UAE</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:alasaneeth22@gmail.com"
                    className="text-indigo-600 hover:underline"
                  >
                    alasaneeth22@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+9710568358651"
                    className="text-indigo-600 hover:underline"
                  >
                    +971 056 835 8651
                  </a>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold">
                ✅ Available for immediate employment in Dubai on Visit Visa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;