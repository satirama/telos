<template>
  <div class="store container">
    <div class="store-products content">
      <div class="cart">
        <p>Budget: ${{ budget }}</p>
        <p>{{ cart.length }} Cart</p>
      </div>
      <h1>Store</h1>
      <div class="list">
        <div v-for="(product, index) in products" v-bind:key="index">
          <Product :product="product"></Product>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Product from '@/components/Product.vue';

export default {
  name: 'Store',
  components: {
    Product,
  },
  computed: {
    budget() {
      return this.$store.state.budget;
    },
    products() {
      return this.$store.state.products;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>
<style scoped>
.store .store-products .cart {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}

.store .store-products .cart p:first-child {
  font-size: 85%;
  margin: auto 1rem;
  color: #646464;
}

.store .store-products .cart:hover p:nth-child(2)  {
  text-decoration: underline;
}

.store .store-products .list {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
}
</style>
