<template>
  <div class="home">
    <div class="header">
      <div>
        <h1>Fullfill your most peculiar tea wishes.</h1>
        <p>From a common black tea to the rarest Da Hong Pao, each of them delivered right at your door.</p>
      </div>
      <img src="../assets/logo.png">
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>
<style lang="scss" scoped>
.home {
  .header {
    min-height: 513px;
    background: #0B1113;
    img {
      float: right;
    }
  }
}
</style>
