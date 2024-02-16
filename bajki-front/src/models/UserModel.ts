export interface UserProfile {
  _id: string;
  name: string;
  email: string;
}

export interface UserModel {
  userToken: string | null;
  userProfile: UserProfile | null;
}
