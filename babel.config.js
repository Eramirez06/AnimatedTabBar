module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          navigation: './src/navigation',
          screens: './src/screens',
          hooks: './src/hooks',
          utils: './src/utils',
          components: './src/components',
          assets: './src/assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
