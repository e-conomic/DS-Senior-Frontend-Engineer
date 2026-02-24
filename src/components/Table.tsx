import type { Project } from "../models/project";

export type TableProps = {
  projects: Project[];
};

export const Table = (props: TableProps) => {
  const { projects } = props;
  return (
    <table className="w-1/3 border mt-6">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Owner</th>
        </tr>
      </thead>
      <tbody>
        {projects.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center py-4">
              No projects found.
            </td>
          </tr>
        ) : (
          projects.map((project) => (
            <tr key={project.id}>
              <td className="border px-4 py-2">{project.id}</td>
              <td className="border px-4 py-2">{project.name}</td>
              <td className="border px-4 py-2">{project.createdOn}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
