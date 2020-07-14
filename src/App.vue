<template>
  <div id="app">
    <div id="nav">
      <p>TEESH</p>
      <router-link to="/">
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getProducts');
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.dark-text {
  color: #0B1113;
}
.dark-background {
  background-color: #0B1113;
}

.light-text {
  color: #FFF;
}
.light-background {
  background-color: #FFF;
}

.container {
  display: flex;
  justify-content: center;
}

.content {
  max-width: 1312px;
  width: 100%;
}

button {
  width: 193px;
  height: 42px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

.hide {
  display: none;
  opacity: 0;
}

.desktop {
  display: none;
}

.mobile {
  display: inherit;
}

#nav {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #0b111333;
}

#nav p {
  margin: 0;
  color: #0B1113;
  font-size: 24px;
}

#nav a {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #0B1113;
}

@media screen and (min-width: 768px) {
  .mobile {
    display: none;
  }
  .desktop {
    display: inherit;
  }
}
</style>
