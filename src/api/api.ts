import axios from "axios";
interface Project {
  id: number;
  name: string;
  shortDescription: string;
  teamSize: number;
  occupiedPlaces: number;
  openedRoles: string[];
  avatarURLs: string[];
}

interface ProjectResponse {
  data: Project[];
}
const URL = "https://teamder-dev.herokuapp.com/api";
export async function getProjects(page: number, size: number) {
  try {
    const { data } = await axios.get<ProjectResponse>(`${URL}/projects`, {
      params: { page: page, size: size },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
