const path = require('path');

module.exports = {
  entry: './src/Button.js', // Button.js bileşeninin giriş noktası
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'MyReactButton',  // React bileşeni adına karar verin
    libraryTarget: 'umd',  // Her ortamda kullanılabilir olacak şekilde paketleyin
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};