module.exports = function babelConfig(api = { cache: () => {} }) {
  api.cache(true)

  const presets = [
    ['@babel/preset-env', {
      targets: {
        browsers: ['last 2 versions', 'ie >= 10', 'Explorer 11'],
      },
    }],
    '@babel/preset-react',
  ]
  const plugins = [
    'dynamic-import-node',
    ['module-resolver', {
      root: ['./'],
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        pwd: './',
        '~': './src',
        Public: './public/',
        API: './src/utils/axios-api.js',
        Constants: './src/constants.js',
        Common: './src/components/Common',
        Pages: './src/components/Pages',
        Components: './src/components',
        RootDuck: './src/duck',
        Utils: './src/utils',
        TestUtils: './tests/utils',
        Data: './src/data',
        Styles: './src/styles',
      },
      cwd: 'babelrc',
    }],
    '@babel/plugin-transform-runtime',
  ]

  return {
    presets,
    plugins,
    ignore: [
      'node_modules',
    ],
  }
}
