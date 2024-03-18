import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', { ...userData });

      toast.success('Your account has been successfully created !');
      return { ...response.data.user, password: userData.password };
    } catch (error) {
      const errorNotify =
        error.response.data.message ?? `Register failed. Please, try again ! `;

      toast.error(errorNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', { ...userData });

    setAuthHeader(response.data.token);
    toast.success('Logged in successfully !');
    return response.data;
  } catch (error) {
    toast.error('Logged in failed. Please, try again !');
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    clearAuthHeader();
    toast.success(`You're logged out !`);
    return;
  } catch (error) {
    toast.error('Logged out failed. Please, try again !');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { register, logIn, logOut };
