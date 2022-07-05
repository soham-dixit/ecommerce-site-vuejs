<template>
<div class="wrap-body">
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
      <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
        <img :src="product.image" alt=""  width="100px" height="90px" class="product-image">
        <h3 class="product-name">{{ product.name }}</h3>
        <span class="product-price">Rs {{ product.price }} </span>
        <button class="product-remove" @click="remove(index)">X</button>
      </li>
      </transition-group>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <button class="paybtn">
      <router-link to="./">Back to products</router-link>
      </button>
    </div>
    <h3 class="total" v-if="hasProduct()">
      Total: Rs {{ totalPrice() }}
    <button class="paybtn">
          <router-link to="/payment">Checkout</router-link>
    </button>
    </h3>
  </div>
  <!-- <div class="footer">
<div class="container2">
    <div class="footer_child footer_child_1">
        <img src="https://i.imgur.com/ruPamPO.png" width="300px" height="100px">
        <br />
        <h1>Wallet Town</h1>
    </div>
    <div class="footer_child">
        <ul>
            <li class="first">Quick Links</li>
            <li class="link">
              <router-link to="/">Products</router-link>
            </li>
            <li class="link">
              <router-link to="/checkout">Cart</router-link>
            </li>
        </ul>
    </div>
    <div class="footer_child">
        <ul>
            <li class="first">Contact Us</li>
            <li>
                29th Street, plot 304,
                Washington, 410206 USA.
            </li>
            <li>+91-9087645364</li>
            <li>enquiry@wallettown.com</li>
        </ul>
    </div>
</div>
</div> -->
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },

  methods: {
    ...mapActions([
      'removeProduct',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.price, 0);
    },
    remove(index) {
      this.removeProduct(index);
    },
  },
};
</script>

<style scoped>
  .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-product * {
    place-self: center;
  }
  .product-image {
    grid-column: 1/2;
    width: 50%;
  }

  .product-name {
    box-sizing: border-box;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }

  .total {
    font-size: 2em;
    font-weight: bold;
    align-self: flex-end;
  }

  .checkout-message {
    font-size: 1.5em;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }
  .paybtn{
  background-color: #BA0E44;
  border: none;
  color: rgb(255, 255, 255);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 3px;
}
  a{
    color: white;
  }

  /* CSS for footer */
.container2{
    display: flex;
    width:100%;
    background-color: DIMGREY;
    margin-top: 5px;
    margin-left: 350px;
    position: static;
}
.footer{
    width: 100%;
    height: 225px;
    /* margin-top: 750px; */
    background-color: DIMGREY;
    display: flex;
    flex-direction: row;
    justify-content: center;
    bottom: 0px;
    position: fixed;
}
.footer_child{
    height: 200px;
    width: 25%;
    margin-left: 20px;
    font-family: segoe UI;
    display: flex;
    justify-content: center;
    background-color: DIMGREY;
}
.footer_child_1{
    align-items: center;
    color: white;
    font-size: 30px;
    background-color: DIMGREY;
    flex-direction: column;
}

.footer_child_4{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: DIMGREY;
}

.first{
    font-size: 22px;
}

.footer_child ul {
    margin-top: 40px;
    background-color: DIMGREY;
}

.footer_child li {
    list-style-type: none;
    margin-bottom: 10px;
    color: white;
    background-color:DIMGREY;
}

.linker:hover{
    color: orange;
    cursor: pointer;

}
</style>
