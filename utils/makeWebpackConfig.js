/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const compactLicenseHeader = require('./license').compactLicenseHeader;
const NODE_ENV = process.env.NODE_ENV || 'development';
const TARGET = process.env.TARGET;
const ANALYZE = process.env.ANALYZE;
const isProduction = NODE_ENV === 'production';

function getEntry() {
  const path = TARGET === 'demo' ? './src/__demo__' : './src';
  return {
    index: `${path}/index.js`
  };
}

function getOutput({ packageName, packagePath }) {
  if (TARGET === 'demo') {
    return {
      filename: '[name].js',
      path: path.resolve(packagePath, 'dist/demo')
    };
  } else if (TARGET === 'site') {
    return {
      filename: '[name].js',
      path: path.resolve(packagePath, 'dist')
    };
  } else {
    return {
      filename: '[name].js',
      library: packageName,
      libraryTarget: 'umd',
      path: path.resolve(packagePath, 'dist/umd')
    };
  }
}

function getExternals() {
  if (['demo', 'site'].includes(TARGET)) {
    return;
  } else {
    return {
      react: {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom'
      }
    };
  }
}

function getModule() {
  return {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  };
}

function getResolve() {
  return {
    mainFields: ['browser', 'module', 'main']
  };
}

function getDevServer({ packagePath }) {
  if (['demo', 'site'].includes(TARGET)) {
    const contentBase = TARGET === 'demo'
      ? path.join(packagePath, 'dist/es/__demo__')
      : path.join(packagePath, 'dist');

    return {
      contentBase,
      compress: true,
      host: '0.0.0.0'
    };
  }

  return;
}

function getDevtool() {
  return isProduction ? 'source-map' : 'cheap-module-eval-source-map';
}

function getPlugins() {
  let plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new webpack.BannerPlugin({
      banner: compactLicenseHeader,
      raw: true,
      entryOnly: true
    })
  ];

  if (['demo', 'site'].includes(TARGET)) {
    const template = TARGET === 'demo'
      ? './src/__demo__/index.html'
      : './src/index.html';

    plugins.push(new HtmlWebpackPlugin({ template }));
  }

  if (isProduction) {
    plugins = plugins.concat([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true,
          warnings: false
        },
        sourceMap: true
      })
    ]);
  }

  if (ANALYZE) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerHost: '0.0.0.0'
      })
    );
  }

  return plugins;
}

function makeWebpackConfig(options) {
  return {
    entry: getEntry(),
    output: getOutput(options),
    externals: getExternals(),
    module: getModule(),
    resolve: getResolve(),
    devServer: getDevServer(options),
    devtool: getDevtool(),
    plugins: getPlugins()
  };
}

module.exports = makeWebpackConfig;