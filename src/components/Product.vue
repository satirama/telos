<template>
  <div class="product">
    <img src="/assets/tea_cup.jpg">
    <p>Quantity: {{ product.quantity }}</p>
    <p>Price: ${{ product.price }}</p>
    <p>Description: {{ product.description }}</p>
    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
  },
};
</script>
<style scoped>
.product {
  width: 180px;
  text-align: left;
  margin: 15px
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
