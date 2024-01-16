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

export interface SignupAction {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export interface SignupCompleted {
  message: string;
  success: boolean;
}

export interface ResetPasswordPayload {
  email: string;
  otp: string;
  newPassword: string;
}

export interface ResetPasswordOtpPayload {
  email: string;
}

