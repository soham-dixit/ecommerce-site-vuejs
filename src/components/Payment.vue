<template>
<div>
    <div class="wrapper">
  <div class="card">
    <h2 class="visa">VISA</h2>
    <h3 class="num">1234 5678 9012 3456</h3>
      <h4>Name<br>ABCD</h4>
      <h4>EXP<br>10/21</h4>
      <h4>CVC<br>123</h4>
  </div>
  <div class="main">
    <div class="content">
      <h1>Payment Details</h1>
      <form>
     <!--   <label>Name</label>-->
        <input id="name" type="name" value="ABCD">
       <!-- <label>Card Number</label>-->
        <input type="text" value="1234 5678 9012 3456">
      <!--  <label>Expiration Date</label>-->
        <input type="month" value="2021-10">
        <input type="user" value="123">
        <!--   <label>Address</label>-->
        <input id="address" type="address" value="Address">
      </form>
      <div class="payment">
        <h4>Payment Amount :<div class ="amount"> Rs. {{ totalPrice() }}</div></h4>
        <!-- <h3 class="total" v-if="hasProduct()">
          Total: Rs {{ totalPrice() }}
        </h3> -->
        <button v-on:click="popUp">Pay</button>
        </div>
    </div>
  </div>
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
              <router-link to="/" style="color:white">Products</router-link>
            </li>
            <li class="link">
              <router-link to="/checkout" style="color:white">Cart</router-link>
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
import { mapGetters } from 'vuex';

export default{
  computed: {
    ...mapGetters([
      'getProductsInCart',
    ]),
  },
  methods: {
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.price, 0);
    },
    popUp() {
      // eslint-disable-next-line
      alert('Payment successful! Thank you.');
    },
  },
};
</script>
<style scoped>
body{
  background-image: linear-gradient(to right, #eac1ff, #dfc9ff, #d7d0ff, #d1d6ff, #cedbff);
}
.wrapper{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: auto;
  margin-right: auto;
}
.content h1{
  font-family: 'Playfair Display', serif;
}
.main{
  background-color: white;
  border: 2px solid #6200EA;
  width: 450px;
  height: 380px;
  box-shadow: 0px 8px 60px -10px white;
  border-radius: 10px;
  padding:70px;
  padding-top:10px;
  margin-top: -100px;
}
.content{
  padding-top:10px;
  padding-left:140px;
  font-family: 'Montserrat Medium';
}
/*inpuuuut*/
input[type=name] {
  background-color: white;
  background-image: url('https://image.flaticon.com/icons/svg/2089/2089773.svg');
  background-position:5px 5px;
  background-size:9%;
  background-repeat: no-repeat;
  padding-left: 40px;
}
input[type=text] {

  background-color: white;
  background-image: url('https://image.flaticon.com/icons/svg/633/633611.svg');
  background-position:5px 5px;
  background-size:9%;
  background-repeat: no-repeat;
  padding-left: 40px;
}
input[type=month] {
  width :66%;
  background-color: white;
  background-image: url('https://image.flaticon.com/icons/svg/2693/2693507.svg');
  background-position:6px 5px;
  background-size:14%;
  background-repeat: no-repeat;
  padding-left: 40px;
  padding-bottom:13px;
  font-family: 'Montserrat Medium';
}
input[type=user] {
  width :32.5%;
  background-color: white;
  background-image: url('https://cdn1.iconfinder.com/data/icons/glyph-card-payment/32/credit_card_CVV_CVC_code_number-512.png');
  background-position:5px 5px;
  background-size:31%;
  background-repeat: no-repeat;
  padding-left: 42px;
}
input[type=address] {
  background-color: white;
  background-image: url('https://i.imgur.com/tEKJ9DX.jpg');
  background-position:5px 5px;
  background-size:9%;
  background-repeat: no-repeat;
  padding-left: 40px;
}

input{
  width:100%;
  padding: 15px 10px;
  margin: 3px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #96a4e7;
}
.amount{
  float:right;
  right:0;
}
button{
  width:100%;
  padding: 10px 20px;
  margin: 3px 0;
  background-color: #00008B;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}
/*credit card*/
.card{
  background-image: linear-gradient(to bottom, #96a4e7, #a7a6ee, #baa7f3, #cda8f7, #e1a9f9);
  position:fixed;
  right:70%;
  top:25%;
  float:left;
  width:300px;
  height:200px;
  box-shadow: 8px 10px 0px 1px #cedbff ;
  border-radius: 10px;
  font-family: 'Montserrat Thin';
  border: 2px solid #6200EA;
}

.visa{
  padding-left:220px;
  font-style: italic;
  text-shadow: #eac1ff 3px 0 1px;
  color:white;
  /*visa font*/
  font-family: "Myriad Pro", Myriad, "Liberation Sans", "Nimbus Sans L", "Helvetica Neue",
  Helvetica, Arial, sans-serif;
}
.num{
  color:white;
  text-align:center;
  padding-top:20px;
  line-height:0;
}
.card h4{
  color:white;
  float:left;
  width:33%;
  text-align:center;
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
    margin-top: 500px;
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
