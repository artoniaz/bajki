import TaleModel from "../../models/TaleModel";

const API_URL = "/api/tales";

const taleService = {
  getTalesByUser: async (userToken: string): Promise<TaleModel[]> => {
    try {
      const response = await fetch(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      const json = await response.json();
      if (!response.ok) {
        throw json.error;
      }
      return json;
    } catch (e) {
      throw e;
    }
  },
  createTale: async (taleReq: TaleModel) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(taleReq),
        headers: { "Content-Type": "application/json" },
      });
      
      const json = await response.json();
      if (!response.ok) {
        throw json.error;
      }
      return json;
    } catch (e) {
      throw e;
    }
  },
};

export default taleService;
