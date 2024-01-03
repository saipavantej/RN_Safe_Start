export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type MainStackParamList = {
  DrawerScreens: undefined;
};

export type DrawerParamList = {
  ProductScreens: undefined;
  ProfileScreens: undefined;
};

export type ProductScreensParamList = {
  ProductsList: undefined;
  ProductDetails: {product_id: number};
};

export type ProfileScreensParamList = {
  MyProfile: undefined;
};
