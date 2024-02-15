import AuthCredentialsModel from "../../models/AuthCredentialsModel";
import { UserProfile } from "../../models/UserModel";
import { fetchAPI } from "../../utils/fetchAPI";

const API_URL = "/api/user";

export const authService = {
  registerUser: async (req: AuthCredentialsModel): Promise<string> => {
    try {
      const response = await fetchAPI({
        url: `${API_URL}/register`,
        req: req,
        method: "POST",
      });
      const json = await response.json();
      if (!response.ok) {
        throw json.error;
      }
      return json.userToken;
    } catch (e) {
      throw e;
    }
  },
  loginUser: async (req: AuthCredentialsModel): Promise<string> => {
    try {
      const response = await fetchAPI({
        url: `${API_URL}/login`,
        req: req,
        method: "POST",
      });
      const json = await response.json();
      if (!response.ok) {
        throw json.error;
      }
      return json.userToken;
    } catch (e) {
      throw e;
    }
  },
  getUserProfile: async (userToken: string): Promise<UserProfile> => {
    try {
      const response = await fetch(`${API_URL}/profile`, {
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
};
