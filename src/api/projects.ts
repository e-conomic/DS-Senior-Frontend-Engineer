export async function getAllProjects() {
  const response = await fetch('/api/projects/get-all')
  return response.json()
}