<template>
  <div class="store container">
    <div class="store-products content">
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
import json from '../assets/data.json';

export default {
  name: 'Store',
  components: {
    Product,
  },
  computed: {
    products() {
      console.log(this.$store.state.products, json, 'njkjknnjk');
      return this.$store.state.products;
    },
  },
};
</script>
<style scoped>
.store .store-products .list {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
}
</style>
