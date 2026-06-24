import React from "react";
import primsore from "../assets/primsore.jpg";
import eloide from "../assets/eloide.jpg";
import aurora from "../assets/aurora.jpg";
import eloise from "../assets/eloise.jpg";
// import averly from "../assets/averly.jpg";
import audrey from "../assets/audrey.jpg"
import lea from "../assets/lea.jpg";
import lauren from "../assets/lauren.jpg";
import sophia from "../assets/sophia.jpg";
import whitmore from "../assets/whitmore.jpg"
// import valmont from "../assets/valmont.jpg"

const teamMembers = [
  {
    img: primsore,
    alt: "Primrose Sinclair",
    name: "Primrose Sinclair",
    role: "Author Visibility Strategist",
    email: "primrosevioletesinclair@gmail.com",
  },
  {
    img: eloise,
    alt: "Eloise V Brenton",
    name: "Eloise V Brenton",
    role: "Engagement Strategist",
    email: "eloisebrenton04@gmail.com",
  },
  {
    img: whitmore,
    alt: "Kaelani R Whitmore",
    name: "Kaelani R Whitmore",
    role: "Visibility & Authority Builder",
    email: "kaelanirwhitmore@gmail.com",
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
    role: "Book Marketing & Consulting Agent",
    email: "isophiebeaumont@gmail.com",
  },
  {
    img: lea,
    alt: "Lea A Patterson",
    name: "Lea A Patterson",
    role: "Book Launch Consultant",
    email: "leapeterson09@gmail.com",
  },
  {
    img: audrey,
    alt: "Audrey J. Langston",
    name: "Audrey J. Langston",
    role: "Audience Growth Partner",
    email: "audreyjlangston@gmail.com",
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
