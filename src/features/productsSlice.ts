import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {showErrorToast} from '@components/toast/action';
import {
  FetchProductsDetailsApiParams,
  FetchProductsListApiParams,
  ProductDetailsApiResponse,
  ProductsListApiResponse,
  productDetailsApi,
  productsListApi,
} from '../services';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductList = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  productDetails: Product;
  error: null;
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export const fetchProductsListAsync = createAsyncThunk(
  'products/fetchProductsList',
  async (params: FetchProductsListApiParams) => {
    try {
      const response = await productsListApi(params);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchProductDetailsAsync = createAsyncThunk(
  'products/fetchProductDetails',
  async (params: FetchProductsDetailsApiParams) => {
    try {
      const response = await productDetailsApi(params);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

const initialState: ProductList = {
  status: 'idle',
  productDetails: {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  },
  error: null,
  products: [],
  total: 0,
  skip: 0,
  limit: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Add other synchronous actions if needed
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProductsListAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchProductsListAsync.fulfilled,
        (state, action: PayloadAction<ProductsListApiResponse>) => {
          state.status = 'succeeded';
          state.products = state.products.concat(action.payload.products);
          state.total = action.payload.total;
          state.skip = action.payload.skip;
          state.limit = action.payload.limit;
        },
      )
      .addCase(fetchProductsListAsync.rejected, (_state, action) => {
        showErrorToast(action.error.message ?? '');
      });
    builder
      .addCase(fetchProductDetailsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchProductDetailsAsync.fulfilled,
        (state, action: PayloadAction<ProductDetailsApiResponse>) => {
          state.status = 'succeeded';
          state.productDetails = action.payload;
        },
      )
      .addCase(fetchProductDetailsAsync.rejected, (_state, action) => {
        showErrorToast(action.error.message ?? 'Failed to create task');
      });
  },
});

export const productsReducer = productsSlice.reducer;
export default productsSlice;
