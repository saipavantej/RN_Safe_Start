import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {loginApi, signUpApi} from '../services';
import {replace} from '@navigation/NavService';
import {showErrorToast} from '@components/toast/action';
import {setMultipleItems} from '@utils/asyncStorage';

export type user = {
  user_id: string;
  name: string;
  user_picture: string;
  email_id: string;
  token?: string;
};

export type userState = {
  data: user;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

type loginBody = {
  password: string;
  email_id: string;
};

type signUpBody = {
  password: string;
  user_name: string;
  email_id: string;
};

export const userLoginAsync = createAsyncThunk(
  'user/login',
  async (body: loginBody) => {
    try {
      const response = await loginApi(body);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

const transformApiResponse = (
  type: 'login' | 'signup' | 'editProfile',
  apiResponse: any,
): any => {
  switch (type) {
    case 'editProfile':
      return {
        id: apiResponse.response.user_id,
        name: apiResponse.response.username,
        picture: apiResponse.response.picture,
        emailId: apiResponse.response.email_id,
      };
    default:
      setMultipleItems([
        ['token', apiResponse.token],
        ['userId', apiResponse.response.user_id],
      ]).then(() => {
        replace('MainStack');
      });
      return {
        user_id: apiResponse.response.user_id,
        name: apiResponse.response.username,
        user_picture: apiResponse.response.picture,
        email_id: apiResponse.response.email_id,
        token: apiResponse.token,
      };
  }
};

export const userSignUpAsync = createAsyncThunk(
  'user/signup',
  async (body: signUpBody) => {
    try {
      const response = await signUpApi(body);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

const initialState: userState = {
  data: {
    user_id: '',
    name: '',
    user_picture: '',
    email_id: '',
  },
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserIdFromAsyncStore: (state, action) => {
      state.data.user_id = action.payload;
    },
  },
  extraReducers: builder => {
    // Login
    builder
      .addCase(userLoginAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(userLoginAsync.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = 'succeeded';
          state.error = action.payload.message;
          showErrorToast(action.payload.message);
          return;
        } else {
          state.status = 'succeeded';
          state.data = transformApiResponse('login', action.payload);
        }
      })
      .addCase(userLoginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.error.message ||
          'An error occurred while login please try again!';
        showErrorToast(
          action.error.message ||
            'An error occurred while signUp please try again!',
        );
      });
    // SignUp
    builder
      .addCase(userSignUpAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(userSignUpAsync.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = 'succeeded';
          state.error = action.payload.message;
          showErrorToast(action.payload.message);
          return;
        } else {
          state.status = 'succeeded';
          state.data = transformApiResponse('signup', action.payload);
        }
      })
      .addCase(userSignUpAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.error.message ||
          'An error occurred while signUp please try again!';
        showErrorToast(
          action.error.message ||
            'An error occurred while signUp please try again!',
        );
      });
  },
});
export const {setUserIdFromAsyncStore} = userSlice.actions;
export const userReducer = userSlice.reducer;
export default userSlice;
