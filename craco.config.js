// const path = require('path');

// module.exports = {
//   webpack: {
//     configure: (webpackConfig) => {
//       // sass-loader 설정에 Dart Sass 적용
//       const oneOfRule = webpackConfig.module.rules.find((rule) => Array.isArray(rule.oneOf));
//       if (oneOfRule) {
//         oneOfRule.oneOf.forEach((rule) => {
//           if (Array.isArray(rule.use)) {
//             rule.use.forEach((use) => {
//               if (typeof use.loader === 'string' && use.loader.includes('sass-loader')) {
//                 use.options = {
//                   ...use.options,
//                   implementation: require('sass'),
//                 };
//               }
//             });
//           }
//         });
//       }

//       return webpackConfig;
//     },
//   },
// };
