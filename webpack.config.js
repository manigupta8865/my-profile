const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      stream: require.resolve('stream-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  externals: [
    {
      react: 'react',
      '@emotion/react': '@emotion/react',
      '@emotion/styled': '@emotion/styled',
      classnames: 'classnames',
      'date-fns': 'date-fns',
      'framer-motion': 'framer-motion',
      'react-dom': 'react-dom',
      'next-i18next': 'next-i18next',
    },
    /^@chakra-ui/i,
  ],
};
