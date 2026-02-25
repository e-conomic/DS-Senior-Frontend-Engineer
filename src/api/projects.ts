const BASE_URL = "http://localhost:7029/api"

export async function getAllProjects() {
    const response = await fetch(`${BASE_URL}/projects/get-all`);
    return response.json();
}