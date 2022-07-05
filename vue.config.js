module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ecommerce-site-vuejs/'
    : '/dist'
}