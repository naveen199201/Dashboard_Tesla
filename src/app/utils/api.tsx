import axios from 'axios';

export type ApiResponse<T> = {
  data: T | null; // Stores the fetched data
  error?: string; // Stores the error message if something goes wrong
};

export async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await axios.get<T>(url); // Makes the GET request
    return { data: response.data }; // Returns the data on success
  } catch (error) {
    console.error('Error fetching data:', error); // Logs the error for debugging
    return { data: null, error: (error as Error).message }; // Returns error info
  }
}