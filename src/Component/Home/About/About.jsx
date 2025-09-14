import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import aboutImg from "../../../assets/about2.jpg"; // replace with your image

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        
        {/* Section Title Centered Across */}
        <h2
          style={{ fontFamily: "'Michroma', sans-serif" }}
          className="absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     text-[3rem] md:text-[4rem] font-normal tracking-tight text-gray-900 
                     whitespace-nowrap z-20"
        >
          ABOUT US
        </h2>

        {/* Left Image */}
        <div className="relative">
        
          <img
            src={aboutImg}
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center relative z-10">
          <p className="text-gray-600 mb-4 leading-relaxed">
            Hackney started as a small interior design firm in downtown
            Michigan, aiming to help home buyers to make do with the new space
            that they had acquired. It soon became obvious that it would make
            sense to help our clients see beyond the walls and floor plans, and
            be there with them from the get-go.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Currently, we offer house realtor, interior design, and architecture
            services in order to help our customers find their forever homes as
            seamlessly and painlessly as possible. We value our customers above
            everything else, meaning that we won’t take “OK” as an answer.
          </p>

          {/* Social + Underline Row */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6 text-gray-700">
              <Twitter className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            </div>
            <div className="w-12 h-2 bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
