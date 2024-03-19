import TaleModel from "../../models/TaleModel";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_URL = `${BASE_URL}/api/tales`;

const taleService = {
  getTalesByUser: async (userToken: string): Promise<TaleModel[]> => {
    try {
      const response = await fetch(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      if (!response.ok) {
        throw Error("Błąd pobierania bajek.");
      }
      const json = await response.json();
      return json;
    } catch (e) {
      throw e;
    }
  },
  getTale: async (taleId: string, userToken: string) => {
    try {
      const response = await fetch(`${API_URL}/${taleId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      if (!response.ok) {
        throw Error("Błąd pobierania bajki.");
      }
      const json = await response.json();
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
      if (!response.ok) {
        throw Error("Wystąpił błąd tworzenia bajki");
      }
      return response.json();
    } catch (e) {
      throw e;
    }
  },
};

export default taleService;
