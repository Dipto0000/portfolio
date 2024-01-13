import React from "react";

const academicProjects = [
  {
    title: "Solar panel-based helmet for sustainable power supply",
    description:
      'The "Solar Panel-Based Helmet" is an innovative solution designed to harness solar energy for practical applications. This helmet incorporates a lightweight 3W solar panel, housed within a protective plastic cover, enabling the conversion of sunlight into electrical energy.',
    report_link:
      "https://drive.google.com/file/d/1wjhpNKIOyM7ByJnYHKvkk-tJyHnnQCKR/view?usp=drive_link",
  },
  {
    title:
      "Dust Particle Measuring Device using IR and Photo Sensors for environmental monitoring",
    description:
      'The "Dust Particle Measuring Device" is a tool designed to help monitor the quality of the air we breathe. With rising concerns about air pollution and its health impacts, this device uses special sensors to detect tiny dust particles in the environment.',
    report_link:
      "https://drive.google.com/file/d/1zXM0gO-Dh-JmQe-4IUZNUm57ZKLfj0N/view?usp=drive_link",
  },
  {
    title: "Simulation of a Hospital Unit Using Arena Software",
    description:
      'The "Simulation of a Hospital Unit Using Arena Software" project aimed to analyze and improve the efficiency of a hospital ticket counter system at MAG Osmani Medical College & Hospital in Sylhet. Utilizing Arena simulation software, a detailed model was constructed to replicate the system\'s behavior.',
    report_link:
      "https://drive.google.com/file/d/1zXM0gO-Dh-JmQe-4IUZNUm57ZKLfj0N/view?usp=drive_link",
  },
  {
    title: "Numerical Analysis Using MATLAB",
    description:
      'The "Numerical-Analysis with MATLAB" project encapsulates an in-depth exploration of numerical methods and algorithms, primarily conducted within the context of the IPE-312 Numerical Analysis Lab. Utilizing MATLAB as the primary tool, the project includes comprehensive insights into various mathematical techniques.',
    github_link:
      "https://github.com/shafikul-islam/Numerical-Analysis-with-Matlab",
    report_link: null,
  },
  {
    title: "Introduction to Computer Language with C",
    description:
      'The "Introduction to Computer Language with C" project serves as an introductory exploration into computer programming using the C language. The project encompasses a range of fundamental programming concepts, including arrays, functions, recursion, structures, files, and pointers.',
    github_link: "https://github.com/shafikul-islam/My-Programming-Courses",
    report_link: null,
  },
  {
    title:
      "Impression of National Flag Using Computer Aided Manufacturing (CAM) Technique in CNC Milling",
    description:
      'The project titled "Impression of National Flag Using CAM Technique" focuses on the academic exploration of Computer-Aided Manufacturing (CAM) methodologies. Beginning with the generation of a precise drawing of the national flag of Bangladesh using AutoCAD software, the subsequent step involved the creation of a G-code program.',
    cad_drawing_link:
      "https://drive.google.com/file/d/19jvqXcrsdsfcmrP7G9fT4TxdeAMRHkyK/view?usp=drive_link",
    geometric_code_link:
      "https://drive.google.com/file/d/1DsvnaNPiSE-117YVJwVWf7LphIjIg681/view?usp=drive_link",
    simulation_profile_link:
      "https://drive.google.com/file/d/1ld3-LsqxX5nZIKyWXd9MpQfCmEbsJhhs/view?usp=drive_link",
  },
];
const Academic = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {academicProjects.map((project, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Academic;
