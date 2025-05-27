import { backendUrl } from "./api/config";

export const fetchData = async () => {
  try {
    const response = await fetch(`${backendUrl}/your-endpoint`);
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// updates