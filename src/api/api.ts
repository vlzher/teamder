import axios from "axios";
import type { ProjectResponse } from "@/types/api";
interface Project {
  id: number;
  name: string;
  shortDescription: string;
  teamSize: number;
  occupiedPlaces: number;
  openedRoles: string[];
  avatarURLs: string[];
}

const URL = "https://teamder-dev.herokuapp.com/api";
const numberOfProjects = 4;
export function getProjects(
  page: number,
  searchQuery: string
): Promise<ProjectResponse> {
  return axios
    .get<ProjectResponse>(`${URL}/projects`, {
    params: { page: page, size: numberOfProjects, searchQuery: searchQuery },
    })
    .then((response) => {
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
