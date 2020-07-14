<template>
  <div class="product">
    <img src="/assets/tea_cup.jpg">
    <p>Quantity:</p>
    <p>Cost:</p>
    <p>Description:</p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    msg: String,
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
</style>
