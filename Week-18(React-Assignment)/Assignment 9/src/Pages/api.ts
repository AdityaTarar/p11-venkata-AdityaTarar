import axios from "axios";

const API_BASE_URL = "https://api.shrtco.de/v2";

export async function shortenUrl(longUrl: string): Promise<string> {
  try {
    const response = await axios.post(`${API_BASE_URL}/shorten?url=${longUrl}`);
    return response.data.result.full_short_link;
  } catch (error) {
    throw error;
  }
}
