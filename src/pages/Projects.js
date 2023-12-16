import React from "react";

const researchData = [
  {
    title: "Ongoing Research Projects",
    desc1:
      "Exploring the integration of Graph Neural Networks (GNN) and supply chain dynamics to address complex optimization challenges in the supply chain.",
    desc2:
      " Investigating the application of GNN in solving supply chain optimization problems, aiming to develop an integrated solver.",
    desc3:
      "Analyzing the challenges in establishing smart textiles in the ready-made garments industry, utilizing IV Type 2 Damatel methodology to identify correlations and hurdles.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen mt-1 px-6">
      {researchData.map((data, index) => {
        return (
          <div key={index}>
            <h1>{data.title}</h1>
            <ol>
              <li>{data.desc1}</li>
              <li>{data.desc2}</li>
              <li>{data.desc3}</li>
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
