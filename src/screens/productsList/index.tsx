import {FlatList, Text, View} from 'react-native';
import React, {memo, useEffect} from 'react';
import {ProductScreensParamList} from '@constants/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import PageView from '@components/pageView';
import {Color} from '@constants/colors';
import {Spacer} from '@components/spacer/Spacer';
import {CUSTOM_FONT} from '@constants/fonts';
import {useAppDispatch, useAppSelector} from '@hooks/index';
import {fetchProductsListAsync} from '../../features/productsSlice';
import ProductCard from '@components/productCard/ProductCard';
type Props = NativeStackScreenProps<ProductScreensParamList, 'ProductsList'>;

const emptyState = memo(() => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          ...CUSTOM_FONT.SemiBold,
          fontSize: 18,
          color: Color.BRAND_PRIMARY_DEFAULT,
        }}>
        No Products avalible
      </Text>
    </View>
  );
});

const ProductsList = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {products, skip, total} = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(
      fetchProductsListAsync({
        query: {
          skip: 0,
          limit: 20,
        },
      }),
    );
  }, []);

  const handlePagination = () => {
    if (total > skip) {
      dispatch(
        fetchProductsListAsync({
          query: {
            skip: skip + 20,
            limit: 20,
          },
        }),
      );
    }
  };

  const renderTasks = ({item, _index}: any) => {
    return (
      <ProductCard
        key={item.id.toString()}
        data={item}
        onPress={product_id =>
          navigation.navigate('ProductDetails', {product_id})
        }
      />
    );
  };

  return (
    <PageView
      statusBar
      safeAreaView
      showHeader
      headerText="Products List"
      headerNavigation="drawer">
      <FlatList
        maxToRenderPerBatch={10}
        contentContainerStyle={{flexGrow: 1}}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={renderTasks}
        ItemSeparatorComponent={() => <Spacer direction="vertical" size={15} />}
        onEndReached={({distanceFromEnd}) => {
          if (distanceFromEnd > 0) {
            return handlePagination();
          }
        }}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={emptyState}
      />
    </PageView>
  );
};

export default ProductsList;
