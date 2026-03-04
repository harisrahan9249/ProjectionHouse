"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, Phone, Mail, CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contactform() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const result = await emailjs.send(
        "service_8o42qvo",   // EmailJS service ID
        "template_ualqtwp",  //EmailJS template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "Q1ko0L3Y1mIvgMXle"    //  EmailJS public key
      );

      if (result.status === 200) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        setStatus("Something went wrong!");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Something went wrong!");
    }
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-[#1A132F] text-white px-4 py-16"
    >
      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            key="success-toast"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 z-[60] w-[90%] sm:w-auto -translate-x-1/2 rounded-xl
                       bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 shadow-lg
                       backdrop-blur-2xl flex items-center gap-3"
          >
            <CheckCircle className="h-6 w-6 shrink-0 text-white" />
            <span className="font-medium tracking-wide">
              Message sent successfully!
            </span>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-auto rounded-full p-1 hover:bg-white/10 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <motion.div
          data-aos="fade-up"
          className="bg-white/10 backdrop-blur-2xl p-10 md:p-14 rounded-3xl
                     shadow-[0_0_60px_rgba(113,66,210,0.4)] border border-white/20"
        >
          <motion.h2
            data-aos="fade-down"
            className="text-4xl md:text-5xl font-bold text-center text-[#F4F0FA]
                       mb-10 tracking-tight"
          >
            Let's Talk
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-xl text-white bg-[#2B2250]/50
                         border border-white/20 placeholder-gray-300 focus:outline-none
                         focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-xl text-white bg-[#2B2250]/50
                         border border-white/20 placeholder-gray-300 focus:outline-none
                         focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-xl text-white bg-[#2B2250]/50
                         border border-white/20 placeholder-gray-300 focus:outline-none
                         focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600
                         hover:from-purple-500 hover:to-indigo-500 transition-all
                         duration-300 py-3 rounded-xl font-medium text-white
                         shadow-lg hover:scale-[1.02]"
            >
              {status || "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="flex flex-col space-y-8" data-aos="fade-left">
          <div className="flex items-center gap-4">
            <img
              src="/glansa/GLANSA LOGO pr.png"
              alt="Glansa AV"
              className="h-24 w-24 object-contain drop-shadow-[0_4px_20px_rgba(113,66,210,0.6)]"
            />
            <h3 className="text-3xl font-bold text-transparent bg-clip-text
                           bg-gradient-to-r from-purple-400 to-indigo-300 tracking-wide">
              Glansa AV
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-cyan-400 w-6 h-6 mt-1" />
              <p className="text-lg leading-relaxed">
                Shivalaya CHS, Dahisar East,
                <br /> Mumbai 400068, India
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-cyan-400 w-6 h-6" />
              <p className="text-lg">+91 8850254748</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-400 w-6 h-6" />
              <p className="text-lg">Glansaavessentials@gmail.com</p>
            </div>
          </div>

          <div
            className="w-full h-[250px] rounded-2xl overflow-hidden
                       border border-white/20 shadow-xl"
            data-aos="zoom-in"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.378400008852!2d72.86973281481282!3d19.13359368706398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71f6c19230d%3A0x64e2eae0de9f9c1e!2sShivalaya%20CHS%2C%20Dahisar%20East%2C%20Mumbai%2C%20Maharashtra%20400068%2C%20India!5e0!3m2!1sen!2sin!4v1719056311941!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
