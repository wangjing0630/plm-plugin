const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'src': utils.resolve('examples'),
            'components': utils.resolve('packages'),
            'demo-vuecli3-ui': utils.resolve('packages/index.js'),
        }
    },
}