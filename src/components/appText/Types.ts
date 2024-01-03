import {CUSTOM_FONT} from '@constants/fonts';

const custom = {
  text: (
    color: string,
    size: number,
    fontFamily: keyof typeof CUSTOM_FONT,
  ) => ({
    color: color,
    fontSize: size,
    ...CUSTOM_FONT[fontFamily],
  }),
};

const defaultStyle = {
  text: (color: string) => ({
    color: color,
    fontSize: 10,
  }),
};

const pageTitle = {
  color: '#363636',
  fontSize: 20,
  ...CUSTOM_FONT.SemiBold,
};

const pageSubtitle = {
  color: '#646464',
  fontSize: 14,
  ...CUSTOM_FONT.Regular,
};

const bottomTabBarActive = {
  color: '#363636',
  fontSize: 12,
  ...CUSTOM_FONT.Medium,
};

const bottomTabBarInactive = {
  color: '#646464',
  fontSize: 12,
  ...CUSTOM_FONT.Regular,
};

const topTabBarActive = {
  color: 'rgba(255, 255, 255, 1)',
  fontSize: 12,
  ...CUSTOM_FONT.SemiBold,
};

const topTabBarInactive = {
  color: 'rgba(100, 100, 100, 1)',
  fontSize: 12,
  ...CUSTOM_FONT.Regular,
};

const TextType = {
  custom: {...custom},
  default: {...defaultStyle},
  pageTitle: {...pageTitle},
  pageSubtitle: {...pageSubtitle},
  bottomTabBarActive: {...bottomTabBarActive},
  bottomTabBarInactive: {...bottomTabBarInactive},
  topTabBarActive: {...topTabBarActive},
  topTabBarInactive: {...topTabBarInactive},
};

export {TextType};
