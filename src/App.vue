<template>
  <section style="height: 100%;">
    <div class="container">
      <mainMenu>
        <btn btnColor="btn btn-small btn-info btn-popup"
             :cartIcon="true"
             @click.native="showPopupCart()">
          Cart
          <span class="btn-circle" v-if="hasProduct()">
           {{ getProductsInCart.length }}
        </span>
        </btn>
        <transition name="appear" mode="out-in">
          <popupcart class="cart" v-if="getPopupCart"/>
        </transition>
        <MaskBasket v-if="getPopupCart" @click.native="showPopupCart()"/>
      </mainMenu>
      <transition name="leave" mode="out-in">
        <router-view></router-view>
      </transition>
      <!-- <maskBg v-if="getPopupCart" @click.native="showPopupCart()"/> -->
          <footer-section> </footer-section>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import mainMenu from './components/Menu';
import btn from './components/Btn';
import popupcart from './components/Popupcart';
import payment from './components/Payment';
import FooterSection from './components/FooterSection';
import MaskBasket from './components/MaskBasket';

export default {
  components: {
    MaskBasket,
    mainMenu,
    btn,
    popupcart,
    payment,
    FooterSection,
  },
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getPopupCart',
    ]),
  },
};
</script>

<style>
  @import './assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  html {
    height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #dff9f6;
    height: 100%;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .container {
    width: 100%;
    background-color: #dff9f6;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .leave-enter-active, .leave-leave-active {
    transition: all 0.5s;
  }
  .leave-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .leave-leave-to {
    transform: translateX(100%);
  }

  .appear-enter-active {
    animation: appear-animation .5s;
  }

  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }

  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

</style>
