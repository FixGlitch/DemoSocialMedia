import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginData, User, UserPostData } from "../types/userTypes";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (userId: string) => {
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data as User;
  }
);

export const createUser = createAsyncThunk<User, UserPostData>(
  "user/createUser",
  async (userData: UserPostData) => {
    const response = await axios.post(`${BASE_URL}/user`, userData);
    return response.data as User;
  }
);

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const response = await axios.get(`${BASE_URL}/user`);
  return response.data as User[];
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userId, userData }: { userId: string; userData: User }) => {
    const response = await axios.put(`${BASE_URL}/user/${userId}`, userData);
    return response.data as User;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ full_name, password }: LoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        full_name,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      return token;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        return rejectWithValue("Invalid password");
      } else {
        return rejectWithValue("An error occurred while logging in.");
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ full_name, password }: LoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/register`, {
        full_name,
        password,
      });
      const token = response.data;
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      return rejectWithValue("An error occurred while registering.");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`${BASE_URL}/user/logout`);
      localStorage.removeItem("token");
    } catch (error) {
      return rejectWithValue("An error occurred while logging out.");
    }
  }
);
