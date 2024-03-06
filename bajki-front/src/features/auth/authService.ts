import AuthCredentialsModel from "../../models/AuthCredentialsModel";
import { UserProfile } from "../../models/UserModel";

const API_URL = "https://grim.onrender.com/api/user";

export const authService = {
  registerUser: async (req: AuthCredentialsModel): Promise<string> => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
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
      const response = await fetch(`${API_URL}/login`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
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
