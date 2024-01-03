import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductScreensParamList} from '@constants/routes';
import {useAppDispatch, useAppSelector} from '@hooks/index';
import {fetchProductDetailsAsync} from '../../features/productsSlice';
import PageView from '@components/pageView';
import ProductDetailsCard from '@components/productDetailsCard/ProductDetailsCard';

type Props = NativeStackScreenProps<ProductScreensParamList, 'ProductDetails'>;

const ProfileDetails = (props: Props) => {
  const {product_id} = props.route.params;
  const dispatch = useAppDispatch();
  const {productDetails} = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(
      fetchProductDetailsAsync({
        path: {
          id: product_id,
        },
      }),
    );
  }, [product_id]);

  return (
    <PageView
      statusBar
      safeAreaView
      headerText="Product Details"
      showHeader={true}
      headerNavigation="back">
      <ProductDetailsCard data={productDetails} />
    </PageView>
  );
};

export default ProfileDetails;
