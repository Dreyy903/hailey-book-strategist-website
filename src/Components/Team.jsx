import React from "react";
import ashley from "../assets/ashley.jpg";
import eloide from "../assets/eloide.jpg";
import aurora from "../assets/aurora.jpg";
import eloise from "../assets/eloise.jpg";
import averly from "../assets/averly.jpg";
import lea from "../assets/lea.jpg";
import audrey from "../assets/audrey.jpg";
import lauren from "../assets/lauren.jpg";
import sophia from "../assets/sophia.jpg";

const teamMembers = [
  {
    img: ashley,
    alt: "Ashley Greenwell",
    name: "Ashley Greenwell",
    role: "Author Visibility Strategist",
    email: "ashleygreenwell.traction@gmail.com",
  },
  {
    img: eloise,
    alt: "Eloise V Brenton",
    name: "Eloise V Brenton",
    role: "Engagement Strategist",
    email: "eloisebrenton04@gmail.com",
  },
  {
    img: audrey,
    alt: "Audrey J Langston",
    name: "Audrey J Langston",
    role: "Visibility & Authority Builder",
    email: "audreyjlangston@gmail.com",
  },
  {
    img: lauren,
    alt: "Lauren Calder",
    name: "Lauren Calder",
    role: "Website Developer",
    email: "laurenhcalder@gmail.com",
  },
  {
    img: sophia,
    alt: "Sophie I Beaumont",
    name: "Sophie I Beaumont",
    role: "Website Developer",
    email: "laurenhcalder@gmail.com",
  },
  {
    img: lea,
    alt: "Lea A Patterson",
    name: "Lea A Patterson",
    role: "Book Launch Consultant",
    email: "leapeterson09@gmail.com",
  },
  {
    img: averly,
    alt: "Averly Thorne",
    name: "Averly Thorne",
    role: "Audience Growth Partner",
    email: "averlythorne04@gmail.com",
  },
  {
    img: eloide,
    alt: "Elodie S. Helena",
    name: "Elodie S. Helena",
    role: "Publishing Consultant",
    email: "elodieshelena@gmail.com",
  },
  {
    img: aurora,
    alt: "Aurora Z. Harrington",
    name: "Aurora Z. Harrington",
    role: "Niche Clarity Consultant",
    email: "aurorazharrington@gmail.com",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 px-6 bg-black text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-orange-500 mb-12">
          Meet the brilliant{" "}
          <span className="text-white underline underline-offset-4">
            intellects behind Ideal Success Literary Hub
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 justify-items-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.img}
                alt={member.alt}
                className="w-56 h-56 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-orange-500 text-sm mt-2 hover:text-orange-400 transition break-all"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
