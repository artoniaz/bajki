export interface UserInfo {
  name: string;
  email: string;
}

export  interface UserModel {
  _id: string;
  userToken: string;
  userInfo: UserInfo | null;
}