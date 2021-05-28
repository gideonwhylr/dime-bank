const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

console.log(process.env.LUC_ENV_VARIABLE);
console.log("wassupppppppppppppppppppp");


module.exports = {
    entry: {
        index: './src/index.js',

      }, 
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'desktop'),
        clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
      }),
      new CleanWebpackPlugin()
  ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
            // Order is last to first
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, 
                'postcss-loader'
            ],
          },
        ],
      }

};
