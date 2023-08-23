import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    users: null,
    user: null,
    product: null,
    products: null,
    spinner: null,
    msg: null,
    token: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {},
  modules: {},
});
