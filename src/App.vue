<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
}

.hide {
  display: none;
  opacity: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
