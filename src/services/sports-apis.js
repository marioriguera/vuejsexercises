import axios from "axios";

const API_URL = "https://nba-stats-db.herokuapp.com/api";

/**
 * Get the best nba players by assists by specifying a year.
 * @param {*} year The year selected to obtain the statistics.
 * @returns The statistics of the best assists in the NBA.
 */
export const getTopAssistants = async (year) => {
  try {
    const response = await axios.get(`${API_URL}/top_assists/totals/${year}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching top assistants:", error);
    throw error;
  }
};
