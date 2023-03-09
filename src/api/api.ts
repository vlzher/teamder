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
const numberOfProjects = 4;
export function getProjects(
  page: number,
): Promise<ProjectResponse> {
  return axios
    .get<ProjectResponse>(`${URL}/projects`, {
      params: { page: page, size: numberOfProjects },
    })
    .then((response) => {
      console.log(response.data.last);
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        throw new Error(error.message);
      } else {
        console.log("unexpected error: ", error);
        throw new Error("An unexpected error occurred");
      }
    });
}
