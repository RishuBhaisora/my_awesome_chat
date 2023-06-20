export interface LoginAction {
  email?: string;
  password?: string;
  token?: string;
}
export interface User {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  name: string;
}
export interface LoginCompletedAction {
  user: User;
  token: string;
}
