const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if(!isDev) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  }

  return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '' // - фича для корректной работы npm run build
        // publicPath: (resourcePath, context) => {
        //   return path.relative(path.dirname(resourcePath), context) + '/';
        // },
      },
    },
    'css-loader',
    'postcss-loader'
  ]

  if(extra) {
    loaders.push(extra);
  }

  return loaders;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './app.js'],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  optimization: optimization(),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: true,
    open: true,
    port: 4200
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'), // шаблон
      filename: 'index.html',
      minify: {
        collapseWhitespace: !isDev
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/services.html'), // шаблон
      filename: 'services.html',
      minify: {
        collapseWhitespace: !isDev
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/services-detail.html'), // шаблон
      filename: 'services-detail.html',
      minify: {
        collapseWhitespace: !isDev
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/news.html'), // шаблон
      filename: 'news.html',
      minify: {
        collapseWhitespace: !isDev
      }
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        // {
        //   from: path.resolve(__dirname, 'src/favicon.png'),
        //   to: path.resolve(__dirname, 'dist')
        // },
        {
          context: path.resolve(__dirname, 'src'),
          from: 'assets/img/',
          to: 'assets/img/'
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      // {
      //   test: /\.(s[ac]ss)$/,
      //   use: cssLoaders('sass-loader')
      // },
      {
        test: /\.(png|jpg|svg|webp)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  }
}
