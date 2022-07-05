<template>
  <header class="header">
          <div class="logo">
         <img src="../assets/images/logo-without-bg.png">
      </div>
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/" style="margin-left:400px;"> All Products</router-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </header>
  </template>

<script>
export default {
};
</script>

<style scoped>
  .header {
    width: 100%;
    height: 100px;
    background-color: #ba0e44;
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    width: 600px;
  }

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .link {
    list-style: none;
    padding: 0 2em;
  }

  .link a {
    color: #fff;
    text-decoration: none;
  }

  .logo {
    margin-left: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    /* background-color: #ba0e44; */
}
</style>
