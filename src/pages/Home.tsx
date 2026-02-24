import { useEffect, useState } from "react";
import type { Project } from "../models/project";
import { getAllProjects } from "../api/projects";
import { Table } from "../components/Table";

export const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    const response = await getAllProjects();
    setProjects(response);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="items-center w-full mt-4 justify-center flex flex-col">
      <p className="text-4xl text-center w-full mb-4">Timelogger Client</p>
      <Table projects={projects} />
    </div>
  );
};
