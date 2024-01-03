import {appService, appService1} from '@config/network';
import {AxiosResponse} from 'axios';

const loginApi = async (body: any) => {
  return appService
    .post('user/login', body)
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
};

const signUpApi = async (body: any) => {
  return appService
    .post('user/signup', body)
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
};

export type FetchProductsListApiParams = {
  query: {skip: number; limit: number};
};

export type ProductsListApiResponse = {
  products: ProductDetailsApiResponse[];
  total: number;
  skip: number;
  limit: number;
};

const productsListApi = async (params: FetchProductsListApiParams) => {
  const {query} = params;
  return appService1
    .get('products', {params: query})
    .then(function (response: any) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
};

export type FetchProductsDetailsApiParams = {
  path: {id: number};
};

export type ProductDetailsApiResponse = {
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

const productDetailsApi = async (params: FetchProductsDetailsApiParams) => {
  const {
    path: {id},
  } = params;
  return appService1
    .get(`products/${id}`)
    .then(function (response: AxiosResponse<ProductDetailsApiResponse>) {
      return response.data;
    })
    .catch(function (error) {
      throw error;
    });
};

export {signUpApi, loginApi, productsListApi, productDetailsApi};
