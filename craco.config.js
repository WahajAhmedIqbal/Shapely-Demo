const path = require('path')
module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, 'src/components'),
            "@containers": path.resolve(__dirname, 'src/containers'),
            "@asset":  path.resolve(__dirname, 'src/asset'),
            "@routers": path.resolve(__dirname, 'src/routers')
        }
    }
}