module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
	  '@auth':'./src/components/auth',
          '@assets': './src/assets',
          '@api': './src/api',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
