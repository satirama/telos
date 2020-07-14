<template>
  <div class="cart container">
    <div class="cart-list content">
      <h1>Products on your cart</h1>
      <div class="item" v-for="(item, index) in cart" v-bind:key="index">
        <img :src="item.img">
        <p>ID: {{item.id}}</p>
        <p>Price: {{item.price}}</p>
        <p>Description: {{item.description}}</p>
      </div>
      <button @click="buyCart">Buy</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cart',
  computed: {
    cart: {
      get() {
        return this.$store.state.cart;
      },
      set(val) {
        this.$store.state.cart = val;
      },
    },
  },
  methods: {
    buyCart() {
      this.cart = [];
      this.$router.push('store');
    },
  },
};
</script>
<style scoped>
.cart .cart-list .item {
  margin: 1.4rem auto;
}

.cart .cart-list .item img {
  width: 80px;
}

.cart .cart-list .item p {
  margin: 0.2rem auto 0 auto;
}

.cart .cart-list button {
  margin-bottom: 2rem;
}
</style>
