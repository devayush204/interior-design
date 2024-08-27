import React from "react";
import img1 from "../../public/assets/fp4.png"; // Import your images
import img2 from "../../public/assets/fp3.png";

const HowWeWork = () => {
  // JSON data for the content
  const workSteps = [
    {
      id: 1,
      title: "Statement of the problem",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    },
    {
      id: 2,
      title: "Project presentation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    },
    {
      id: 3,
      title: "Development of renderings",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    },
  ];

  return (
    <section className="bg-[#F7FAFC] py-10 flex flex-col justify-center items-center px-5 lg:px-52 lg:py-20">
      <h2 className="text-3xl font-bold mb-8">How we Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {workSteps.map((step, index) => (
          <div
            key={step.id}
            className={`p-6 rounded-lg shadow-md relative group overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 ${
              index === 1 ? "bg-[#3A7365] text-white" : "bg-white text-black"
            } flex flex-col `}
          >
            <h3 className="text-5xl font-bold mb-4 z-10 ">
              {step.id < 10 ? `0${step.id}` : step.id}
            </h3>
            <h4 className="text-xl font-semibold mb-2 z-10">{step.title}</h4>
            <p className="text-base z-10">{step.description}</p>

            {/* Add background image on hover for the first and third boxes */}
            {index === 0 && (
              <div
                className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundImage: `url(${img1.src})` }}
              />
            )}
            {index === 2 && (
              <div
                className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ backgroundImage: `url(${img2.src})` }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
