import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-fit pb-28 bg-white dark:bg-[#0b061f] text-[#0b061f] dark:text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact <span className="text-[#F9624E]">Me!</span>
      </h2>

      <form action="#" className="max-w-3xl mx-auto text-center mb-12">
        {/* Input Row 1 */}
        <div className="flex flex-wrap justify-between gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full md:w-[48%] p-4 text-base rounded-lg bg-[#f9f9f9] dark:bg-[#141126] shadow-sm mb-3 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-[48%] p-4 text-base rounded-lg bg-[#f9f9f9] dark:bg-[#141126] shadow-sm mb-3 focus:outline-none"
          />
        </div>

        {/* Input Row 2 */}
        <div className="flex flex-wrap justify-between gap-4">
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full md:w-[48%] p-4 text-base rounded-lg bg-[#f9f9f9] dark:bg-[#141126] shadow-sm mb-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email Subject"
            className="w-full md:w-[48%] p-4 text-base rounded-lg bg-[#f9f9f9] dark:bg-[#141126] shadow-sm mb-3 focus:outline-none"
          />
        </div>

        {/* Textarea */}
        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full p-4 text-base rounded-lg bg-[#f9f9f9] dark:bg-[#141126] shadow-sm mb-6 resize-none focus:outline-none"
        ></textarea>

        {/* Submit Button */}
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
