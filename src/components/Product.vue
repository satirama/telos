<template>
  <div class="product" v-bind:class="{notavailable: notAvailable}">
    <img src="/assets/tea_cup.jpg">
    <p>Quantity: {{ product.quantity }}</p>
    <p>Price: ${{ product.price }}</p>
    <p>Description: {{ product.description }}</p>
    <button
      :disabled="notAvailable"
      @click="addToCart(product)">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
  },
  computed: {
    budget: {
      get() {
        return this.$store.state.budget;
      },
      set(val) {
        this.$store.state.budget = val;
      },
    },
    products: {
      get() {
        return this.$store.state.products;
      },
      set(val) {
        this.$store.state.products = val;
      },
    },
    cart: {
      get() {
        return this.$store.state.cart;
      },
      set(val) {
        this.$store.state.cart = val;
      },
    },
    notAvailable() {
      if (this.budget - this.product.price < 0) return true;
      if (this.product.quantity <= 0) return true;
      return false;
    },
  },
  methods: {
    addToCart(item) {
      this.budget -= item.price;
      this.cart.push(item);
      this.product.quantity -= 1;
    },
  },
};
</script>
<style scoped>
.product {
  width: 180px;
  text-align: left;
  margin: 15px;
  opacity: 1;
}

.product.notavailable {
  opacity: 0.7;
}

.product img {
  width: 100%;
}

.product p {
  margin: 0.5rem 0;
  font-size: 80%;
}

.product button {
  max-width: 100%;
}
</style>
