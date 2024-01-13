import React from "react";
import { Outlet } from "react-router-dom";
import ProjectNestedNavbar from "../shared/ProjectNestedNavbar";

const ProjectLayout = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold m-5">
        I am currently immersed in several research projects
      </h1>

      <ProjectNestedNavbar></ProjectNestedNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default ProjectLayout;
