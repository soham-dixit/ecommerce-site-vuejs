<template>
<div>
  <ul class="listOfProducts">
    <li v-for="(product, index) in products" :key="index" class="product">
      <img :src="product.image" alt=""  width="300px" height="300px">
      <router-link to="/product-details">
        <h2 class="product-name"
            @click="addCurrentProduct(product)">
          {{ product.name }}
        </h2>
      </router-link>
      <div class="product-price">
        <span style="color: red;">New Price: <strong> Rs {{ product.price }} </strong> </span>
        <span>Rs <strike>{{ product.orgprice }}</strike></span>
      </div>

      <btn btnColor="btn btn-large btn-sucess"
          :cartIcon="true"
          @click.native="addProductToCart(product)">
        Add to cart
      </btn>
    </li>
  </ul>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import btn from './Btn';

export default {
  props: ['products'],

  components: {
    btn,
  },
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),

    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style scoped>
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: space-between;
    align-items: center;
  }

  .product {
    width: 310px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
    border:solid black;
    margin-top: 30px;
  }

  .product:hover{
  border-radius: 5% 5% 5% 5% / 5% 5% 5% 5% ;
  box-shadow: 10px 10px rgba(0,0,0,.25);
  transition: all .4s ease;
  }

  .product-name {
    font-size: 1.2em;
    font-weight: normal;
  }

  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .product-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }

/* CSS for footer */
   .container2{
    display: flex;
    width:100%;
    background-color: DIMGREY;
    margin-top: 5px;
    margin-left: 350px;
}
.footer{
    width: 100%;
    height: 225px;
    /* margin-top: 750px; */
    background-color: DIMGREY;
    display: flex;
    flex-direction: row;
    justify-content: center;
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

.linker{
  color: white;
}
.linker:hover{
    color: orange;
    cursor: pointer;

}
</style>

