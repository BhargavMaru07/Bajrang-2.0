import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Jessica James",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mille Maj",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mai Jacobine",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Camilla Kjerstin",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="max-w-4xl p-6 m-auto lg:p-8 md:max-w-7xl">
      <h2 className="mb-4 text-2xl font-semibold text-head">
        Team Members
      </h2>
      <h1 className="mb-10 text-3xl font-semibold sm:text-3xl">
        Latkan Team
      </h1>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full mx-auto rounded-lg"
            />
            <h3 className="mt-4 text-lg font-medium text-gray-800">
              {member.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
