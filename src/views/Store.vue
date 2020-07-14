<template>
  <div class="store container">
    <div class="store-products content">
      <h1>Store</h1>
      <div class="list">
        <Product></Product>
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
