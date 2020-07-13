<template>
  <div class="home">
    <div class="header container">
      <div class="content">
        <div>
          <h1>Fullfill your most peculiar tea wishes.</h1>
          <p>From a common black tea to the rarest Da Hong Pao, each of them delivered right at your door.</p>
          <button class="light-background">Sign up</button>
        </div>
        <img src="../assets/logo.png">
      </div>
    </div>
    <div class="info container">
      <div class="content">
        <h1>Why us</h1>
        <div>
          <div class="info-block">
            <div class="dot"></div>
            <p>Home Delivery</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Maecenas tortor lorem, vehicula eget est sed, malesuada suscipit  magna. Curabitur eu consectetur augue.</p>
          </div>
          <div class="info-block">
            <div class="dot"></div>
            <p>Tea Personalization</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Maecenas tortor lorem, vehicula eget est sed, malesuada suscipit  magna. Curabitur eu consectetur augue.</p>
          </div>
          <div class="info-block">
            <div class="dot"></div>
            <p>Premium Quality</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Maecenas tortor lorem, vehicula eget est sed, malesuada suscipit  magna. Curabitur eu consectetur augue.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sign-up footer container">
      <div class="content">
        <div>
          <h4>SIGN UP</h4>
          <p>Get the best tea experience you’ll be ever taste right at your door each month</p>
          <button class="dark-background">Sign up</button>
        </div>
        <img src="../assets/logo.png">
      </div>
    </div>
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
