import React from "react";
import { ArrowUp } from "lucide-react"; // You can replace with `bx` icon if needed

const Footer = () => {
  return (
    <footer className="flex justify-between items-center flex-wrap px-[7%] py-8 bg-[#F9624E]">
      {/* Left text */}
      <div className="text-white text-base md:text-lg">
        <p>Copyright &copy; All Rights Reserved.</p>
      </div>

      {/* Scroll to top icon */}
      <div className="footer-iconTop">
        <a
          href="#home"
          className="inline-flex justify-center items-center p-2 rounded-lg bg-white border-2 border-[#F9624E] outline outline-transparent transition-all hover:outline-white"
        >
          {/* Replace with bx icon if needed */}
          <ArrowUp className="text-[#333] w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
