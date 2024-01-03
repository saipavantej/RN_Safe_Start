import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {TextType} from './Types';
import {CUSTOM_FONT} from '@constants/fonts';

type Others = {
  type:
    | 'pageTitle'
    | 'pageSubtitle'
    | 'bottomTabBarActive'
    | 'bottomTabBarInactive'
    | 'topTabBarActive'
    | 'topTabBarInactive';
};
type Custom = {
  type: 'custom';
  fontSize: number;
  color: string;
  fontFamily: keyof typeof CUSTOM_FONT;
};
type Default = {
  type: 'default';
  color?: string;
};

export type Props = {
  value: string;
  textStyle?: StyleProp<TextStyle>;
} & (Others | Custom | Default);

export type AppTextProps = Props & TextProps;

const AppText = (props: AppTextProps) => {
  const {type, value, textStyle, ...rest} = props;

  const applyStyle = () => {
    if (type === 'custom') {
      const {fontSize = 10, fontFamily = 'Regular', color = '#363636'} = props;
      return TextType.custom.text(color, fontSize, fontFamily);
    } else if (type === 'default') {
      const {color = '#363636'} = props;
      return TextType.default.text(color);
    } else {
      return TextType[type];
    }
  };

  return (
    <Text style={[applyStyle() as StyleProp<TextStyle>, textStyle]} {...rest}>
      {value}
    </Text>
  );
};

export {AppText};
