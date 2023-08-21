const Users = require('./user')
const Products = require('./products')

module.exports = {
    users: new Users(),
    products: new Products()
}