"use client";
import React, { useState } from "react";

const WHATSAPP_NUMBER = "923369999190"; // 👈 your number

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
📩 *New Contact Message*

👤 Name: ${form.name}
📧 Email: ${form.email}
📱 Phone: ${form.phone}
📝 Subject: ${form.subject}

💬 Message:
${form.message}
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="min-h-fit pb-28 bg-white dark:bg-[#0b061f] text-[#0b061f] dark:text-white px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact <span className="text-[#F9624E]">Me!</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        {/* Row 1 */}
        <div className="flex flex-wrap justify-between gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full md:w-[48%] p-4 rounded-lg bg-[#f9f9f9] dark:bg-[#141126] shadow-sm mb-3 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full md:w-[48%] p-4 rounded-lg bg-[#f9f9f9] dark:bg-[#141126] shadow-sm mb-3 focus:outline-none"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-between gap-4">
          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full md:w-[48%] p-4 rounded-lg bg-[#f9f9f9] dark:bg-[#141126] shadow-sm mb-3 focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full md:w-[48%] p-4 rounded-lg bg-[#f9f9f9] dark:bg-[#141126] shadow-sm mb-3 focus:outline-none"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          rows={6}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-lg bg-[#f9f9f9] dark:bg-[#141126] shadow-sm mb-6 resize-none focus:outline-none"
        />

        {/* Button */}
        <input
          type="submit"
          value="Send Message"
          className="bg-[#F9624E] text-white font-medium px-8 py-3 rounded-lg cursor-pointer hover:bg-[#f9624ea1] transition"
        />
      </form>
    </section>
  );
};

export default Contact;
