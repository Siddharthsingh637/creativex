import React from "react";

const Team = () => {
  const leader = {
    name: "Leader Name",
    role: "Team Leader",
    image: "https://via.placeholder.com/200", // replace with leader image
  };

  const teammates = [
    { name: "Member 1", role: "Developer", image: "https://via.placeholder.com/300x200" },
    { name: "Member 2", role: "Designer", image: "https://via.placeholder.com/300x200" },
    { name: "Member 3", role: "Tester", image: "https://via.placeholder.com/300x200" },
    { name: "Member 4", role: "Backend", image: "https://via.placeholder.com/300x200" },
    { name: "Member 5", role: "Frontend", image: "https://via.placeholder.com/300x200" },
  ];

  return (
    <section id="our team" className="bg-gray-50 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          <span
                    style={{ fontFamily: "'Michroma', sans-serif" }}
                    className="text-[#0B1F5C]">
                Our Team
          </span>
        </h2>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Leader with lines */}
        <div className="flex items-center justify-center mb-16 relative">
          {/* Left Line */}
          <div className="hidden md:block flex-1 border-t-2 border-gray-400 mr-4"></div>

          {/* Circle Leader */}
          <div className="relative">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-44 h-44 rounded-full object-cover border-8 border-white shadow-xl"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">{leader.name}</h3>
            <p className="text-gray-600">{leader.role}</p>
          </div>

          {/* Right Line */}
          <div className="hidden md:block flex-1 border-t-2 border-gray-400 ml-4"></div>
        </div>

        {/* Teammates in product-card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-15">
          {teammates.map((member, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-lg transition"
            >
              <div className="w-full h-50 bg-gray-200 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
