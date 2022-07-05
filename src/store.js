import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: 'Hornbull Rakhi Gift Hamper',
        price: 2500,
        orgprice: 3000,
        image: 'https://i.imgur.com/t4VhGj8.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'Hornbull Benial Mens wallet',
        price: 2200,
        orgprice: 2500,
        image: 'https://i.imgur.com/UyZcIlE.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'HB Billy Mens wallet with pen',
        price: 1400,
        orgprice: 2000,
        image: 'https://i.imgur.com/GZ7pqgT.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'HB Buttler Mens wallet with pen',
        price: 2300,
        orgprice: 2500,
        image: 'https://i.imgur.com/qcyuUQK.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'Hornbull Edward Mens wallet',
        price: 2599,
        orgprice: 3000,
        image: 'https://i.imgur.com/ZXeAmC4.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'HB Label Mens wallet with pen',
        price: 1400,
        orgprice: 2000,
        image: 'https://i.imgur.com/QlsBLkw.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'Wildhorn Carter Mens wallet',
        price: 1400,
        orgprice: 2500,
        image: 'https://i.imgur.com/9RC8c9C.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'Hornbull Themes Mens Wallet',
        price: 1200,
        orgprice: 2000,
        image: 'https://i.imgur.com/TWAKN7W.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'HB Billy Mens Leather Wallet',
        price: 1700,
        orgprice: 2000,
        image: 'https://i.imgur.com/OkBn8OV.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
    ],

    suggestedproducts: [
      {
        name: 'Hornbull Billy Navy/Mud Mens Leather Wallet',
        price: 1700,
        orgprice: 2000,
        image: 'https://i.imgur.com/OkBn8OV.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'Hornbull Benial Mens wallet',
        price: 2200,
        orgprice: 2500,
        image: 'https://i.imgur.com/UyZcIlE.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'Wildhorn Carter Mens wallet',
        price: 1400,
        orgprice: 2500,
        image: 'https://i.imgur.com/gF4PPCb.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
      {
        name: 'Hornbull Billy Mens wallet with pen and keychain',
        price: 1400,
        orgprice: 2000,
        image: 'https://i.imgur.com/GZ7pqgT.jpg',
        details: 'TOP GRAIN LEATHER MENS WALLET LEATHER: This Wallet for men leather stylish Made in Exclusive High Quality Leather, Well Designed wallet men stylish leather By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each RFID Wallets for men Has Unique Natural Grain Of Genuine Leather Wallet for Men',
      },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getAllProducts: state => state.products,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
    getSuggestedproducts: state => state.suggestedproducts,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
