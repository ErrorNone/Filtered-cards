import axios from "axios";
import { ApiResult, Card } from "../types/index";

export const fetchCards = async (): Promise<ApiResult[]> => {
  try {
    const response = await axios.get("https://api.example.com/api", {
      params: {
        _limit: 40,
      },
    });
    if (response.success === true) {
      return response.data.result.filter((card: Card) => card.type === "TASKS");
    } else {
      console.error(response.success);
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
