<template>
    <div class="footer">
<div class="container2">
    <div class="footer_child footer_child_1">
        <img src="https://i.imgur.com/ruPamPO.png" width="300px" height="100px">
        <br />
        <!-- <h1>Wallet Town</h1> -->
    </div>
    <div class="footer_child">
        <ul>
            <li class="first">Quick Links</li>
            <li>
                <router-link to="./" class="linker">All Products</router-link>
            </li>
            <li>
                <router-link to="./checkout" class="linker">Cart</router-link>
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
</div>

</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style>
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
    cursor: pointer;
    color: orange !important;
}
</style>
