export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export interface UserModel {
  userToken: string | null;
  userProfile: UserProfile | null;
}
