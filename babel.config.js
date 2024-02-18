module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            api: './src/api',
            assets: './src/assets',
            components: './src/components',
            constants: './src/constants',
            context: './src/navigation',
            screens: './src/screens',
            utils:'./src/utils',
          },
        },
      ],
      'module:react-native-dotenv',
    ],
  };
  