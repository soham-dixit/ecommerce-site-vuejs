<template>
<div>
<div class="wrap-body">
  <div class="product-box">
    <div class="product-image">
      <img :src="currentProduct.image" alt="" width="300px" height="300px">
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ currentProduct.name }}</h2>
      <span class="product-price">Rs {{ currentProduct.price }}</span>
      <span class="product-orgprice">Rs <strike>{{ currentProduct.orgprice }}</strike></span>
      <!-- <div class="color-options">
         <div style="margin-top: 20px; margin-right: 20px;"> Add Quantity: </div>
         <input type="number" style="width: 100px; height: 30px; margin-top: 10px;" value="1" >
      </div> -->

      <btn btnColor="btn btn-large btn-info"
          @click.native="openModal()">
        More Info
      </btn>
      <btn btnColor="btn btn-large btn-sucess" :cartIcon="true"
      @click.native="addProductToCart(currentProduct)">
        Buy Now
      </btn>
    </div>
    <modal>{{ currentProduct.details }}</modal>
  </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';
import modal from './Modal';

export default {
  props: ['suggestedproducts'],
  components: {
    btn,
    modal,
  },

  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
  },

  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenModal',
    ]),
    addProductToCart(product) {
      this.addProduct(product);
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },
  },

};
</script>

<style scoped>
  .product-box {
    width: 800px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .product-image {
    width: 300px;
  }

  .product-info {
    width: 400px;
    align-self: flex-start;
  }

  .product-title {
    font-weight: normal;
  }

  .product-price {
    font-size: 2em;
    font-weight: bolder;
  }

  .product-orgprice {
    font-size: 1.5em;
    margin-left: 4em;
  }

  .product-box button {
    width: 300px;
    margin: .3em 0;
  }

.color-options {
  height: 50px;
  /* background-color: red; */
  display: flex;
}

.figure {
  background-color: green;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  margin-top: 10px;
}

.black {
  background-color: black;
}

.blue {
  background-color: ROYALBLUE;
}

.green {
  background-color: olivedrab;
}

.brown {
  background-color: brown ;
}
</style>
