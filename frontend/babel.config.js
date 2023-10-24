module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.ios.jsx',
                    '.android.jsx',
                    '.js',
                    '.jsx',
                    '.json',
                    '.ts',
                    '.tsx'
                ],

                root: ['.'],
                alias: {
                    '@components': 'src/components',
                    '@navigation': 'src/navigation',
                    '@screens': 'src/screens',
                    '@styles': 'src/styles',
                    '@models': 'src/models',
                    '@api': 'src/api',
                    '@reducers': 'src/reducers',
                    '@constants': 'src/constants'
                }
            }
        ]
    ]
};
