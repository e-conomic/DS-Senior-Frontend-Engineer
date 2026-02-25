import { createServer } from "node:http";

const PORT = 7029;

const MOCK_PROJECTS = [
  {
    id: "1",
    name: "Alpha Project",
    createdOn: "2024-01-15T10:00:00Z",
    updatedOn: "2025-02-20T14:30:00Z",
  },
  {
    id: "2",
    name: "Beta Initiative",
    createdOn: "2024-03-01T09:00:00Z",
    updatedOn: "2025-02-18T11:00:00Z",
  },
  {
    id: "3",
    name: "Gamma Dashboard",
    createdOn: "2024-06-10T08:00:00Z",
    updatedOn: "2025-02-25T09:15:00Z",
  },
];

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const server = createServer((req, res) => {
  const url = req.url ?? "";
  const method = req.method ?? "";

  const setCors = (headers: Record<string, string>) => ({
    ...CORS_HEADERS,
    ...headers,
  });

  if (method === "OPTIONS") {
    res.writeHead(204, setCors({}));
    res.end();
    return;
  }

  if (method === "GET" && url === "/api/projects/get-all") {
    res.writeHead(200, setCors({ "Content-Type": "application/json" }));
    res.end(JSON.stringify(MOCK_PROJECTS));
    return;
  }

  res.writeHead(404, setCors({ "Content-Type": "application/json" }));
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`Mock API server running at http://localhost:${PORT}`);
  console.log(`  GET http://localhost:${PORT}/api/projects/get-all`);
});
