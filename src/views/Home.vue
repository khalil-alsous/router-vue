<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="container">
      <h1 v-red v-format="50">Addies Shoes</h1>
      <h3 v-format.bold.orange="50">300$</h3>
      <button class="btn btn-success" @click="details('Addies Shoes', 300)">
        More Details
      </button>
      <br />
      <input v-focus type="text" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import router from "../router";
export default {
  name: "Home",
  methods: {
    details(productName, productPrice) {
      router.push({
        name: "Details",
        params: { name: productName, price: productPrice },
      });
    },
  },
  // Local Directive Can Not Use In Other Page
  directives: {
    red: {
      bind: (el) => {
        el.style.color = "red";
      },
    },
  },
};
</script>
