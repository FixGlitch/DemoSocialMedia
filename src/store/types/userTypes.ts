export interface User {
  user_id: string;
  full_name: string;
  password: string;
  token?: string
}

export interface UserPostData {
  full_name: string;
  password: string;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface RegisterData {
  full_name: string;
  password: string;
}

export interface LoginData {
  full_name: string;
  password: string;
}

export type Users = User[];
