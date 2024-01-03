import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from './features/userSlice';
import {productsReducer} from './features/productsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;
