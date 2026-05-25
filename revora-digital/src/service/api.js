import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
const COUNTRY_API = "https://restcountries.com/v3.1/all";

export const getCountries = async () => {
  try {
    const response = await axios.get(COUNTRY_API);

    // Sort country names
    return response.data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  } catch (error) {
    console.log("Country API Error:", error);
    return [];
  }
};
export default api;