import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FetchError,
  LoginData,
  LoginResponse,
  User,
  UserPostData,
} from "../types/userTypes";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export const getAllUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: FetchError }
>("user/getAllUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/user`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: "Error fetching users" });
    }
    throw error;
  }
});

export const getUserById = createAsyncThunk<
  User,
  string,
  { rejectValue: FetchError }
>("user/getUserById", async (userId: string, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: "Error fetching user by ID" });
    }
    throw error;
  }
});

export const createUser = createAsyncThunk<
  User,
  UserPostData,
  { rejectValue: FetchError }
>("user/createUser", async (userData: UserPostData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/user`, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: "Error creating user" });
    }
    throw error;
  }
});

export const updateUser = createAsyncThunk<
  User,
  { userId: string; userData: User },
  { rejectValue: FetchError }
>("user/updateUser", async ({ userId, userData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${BASE_URL}/user/${userId}`, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: "Error updating user" });
    }
    throw error;
  }
});

export const deleteUser = createAsyncThunk<
  void,
  string,
  { rejectValue: FetchError }
>("user/deleteUser", async (userId: string, { rejectWithValue }) => {
  try {
    await axios.delete(`${BASE_URL}/user/${userId}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: "Error deleting user" });
    }
    throw error;
  }
});

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginData,
  { rejectValue: FetchError }
>(
  "user/loginUser",
  async ({ full_name, password }: LoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        full_name,
        password,
      });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(user));
      return { token, user };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          return rejectWithValue({ message: "Invalid password" });
        }
        return rejectWithValue({ message: "Error logging in" });
      }
      throw error;
    }
  }
);

export const registerUser = createAsyncThunk<
  string,
  LoginData,
  { rejectValue: FetchError }
>(
  "user/registerUser",
  async ({ full_name, password }: LoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/register`, {
        full_name,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue({ message: "Error registering user" });
      }
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk<
  void,
  void,
  { rejectValue: FetchError }
>("user/logoutUser", async (_, { rejectWithValue }) => {
  try {
    await axios.post(`${BASE_URL}/user/logout`);
    localStorage.removeItem("token");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: "Error logging out" });
    }
    throw error;
  }
});
