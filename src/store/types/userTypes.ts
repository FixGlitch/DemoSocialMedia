export interface User {
  user_id?: string;
  full_name: string;
  password?: string;
  about: string;
  token?: string;
}

export interface UserPostData {
  full_name: string;
  password: string;
}

export interface FetchError {
  message: string;
}

export interface UsersState {
  users: User[];
  userDetail: User | null;
  loading: boolean;
  error: string | null;
  token: string | null;
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

export interface LoginResponse {
  token: string;
  user: {
    user_id: string;
    full_name: string;
    password: string;
    about: string;
  };
}

export type Users = User[];
