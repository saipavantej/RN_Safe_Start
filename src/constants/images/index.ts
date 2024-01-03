const commonImages = {
  welcome: require('../../assets/images/welcome.png'),
};

const commonIcons = {
  eye: require('../../assets/icons/eye.png'),
  eyeError: require('../../assets/icons/eyeError.png'),
  eyeOff: require('../../assets/icons/eyeOff.png'),
  eyeOffError: require('../../assets/icons/eyeOffError.png'),
  leftArrow: require('../../assets/icons/arrowLeft.png'),
  products: require('../../assets/icons/box-search.png'),
  menu: require('../../assets/icons/category.png'),
  profile: require('../../assets/icons/profile.png'),
  logout: require('../../assets/icons/logout.png'),
};

const assets = {
  images: {
    ...commonImages,
  },
  icons: {
    ...commonIcons,
  },
};

export {assets, commonIcons, commonImages};
