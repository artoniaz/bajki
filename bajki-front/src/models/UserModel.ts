export interface UserInfo {
  _id: string;
  name: string;
  email: string;
}

export interface AuthInfo {
  _id: string;
  userToken: string;
}

export  interface UserModel {
  authInfo: AuthInfo | null;
  userInfo: UserInfo | null;
}