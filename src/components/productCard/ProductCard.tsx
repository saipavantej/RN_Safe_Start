import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {scaleHeight, scaleWidth} from '@utils/scaleDimension';
import {Color} from '@constants/colors';
import {AppText} from '@components/appText/AppText';
import {ProductDetailsApiResponse} from '../../services';
import {View} from 'react-native';
import {Spacer} from '@components/spacer/Spacer';

type Props = {
  data: ProductDetailsApiResponse;
  onPress: (product_id: number) => void;
};

const ProductCard = (props: Props) => {
  const {
    data: {id, title, price, brand, discountPercentage, thumbnail},
    onPress,
  } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Image
          source={{uri: thumbnail}}
          style={{height: 100, width: 100, resizeMode: 'cover'}}
        />
        <Spacer direction="horizontal" size={scaleWidth(15)} />
        <View style={{justifyContent: 'center'}}>
          <AppText
            value={title}
            numberOfLines={2}
            type="custom"
            color={Color.NEUTRAL_PRIMARY}
            fontSize={21}
            fontFamily="Bold"
          />
          <Spacer size={scaleHeight(2)} />
          <AppText
            value={brand}
            type="custom"
            color={Color.NEUTRAL_PRIMARY}
            fontSize={18}
            fontFamily="Bold"
          />
          <Spacer size={scaleHeight(2)} />
          <AppText
            value={`$${price}`}
            type="custom"
            color={Color.BRAND_PRIMARY_PRESSED}
            fontSize={18}
            fontFamily="Bold"
          />
          <Spacer size={scaleHeight(2)} />
          <AppText
            value={`${discountPercentage}% off`}
            type="custom"
            color={Color.BRAND_PRIMARY_DEFAULT}
            fontSize={18}
            fontFamily="Bold"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductCard);

const styles = StyleSheet.create({
  container: {
    minWidth: scaleWidth(327),
    minHeight: scaleWidth(138),
    padding: scaleWidth(10),
    borderRadius: 18,
    backgroundColor: Color.NEUTRAL_LINE,
    shadowColor: Color.SUCCESS_BACKGROUND,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
  },
});
