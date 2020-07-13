<template>
  <div class="home">
    <div class="header container">
      <div class="content">
        <div class="text">
          <h1>Fullfill your most peculiar tea wishes.</h1>
          <p>From a common black tea to the rarest Da Hong Pao, each of them delivered right at your door.</p>
          <button class="light-background dark-text">Sign up</button>
        </div>
        <img src="/assets/tea_cup.jpg">
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
        <img src="/assets/tea_cup.jpg">
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
<style lang="css" scoped>
.header {
  min-height: 513px;
  background: #0B1113;
  color: #FFF;
}

.header .content {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 2rem 1rem;
  justify-content: center;
}

.header .content img {
  width: 90%;
  border-radius: 32px 32px 0px 0px;
  display: block;
  margin: 6rem auto -23% auto;
  max-width: 400px;
}

.header .content .text h1 {
  font-size: 48px;
  line-height: 60px;
}

.header .content .text p {
  font-size: 18px;
  margin-bottom: 3rem;
  line-height: 36px;
}

@media screen and (min-width: 768px) {
.header .content {
  padding: 3rem;
  justify-content: start;
}

.header .content img {
  position: absolute;
  right: 2rem;
  bottom: -12%;
  max-width: 505px;
  border-radius: 32px 32px 0px 0px;
  width: 40%;
  margin: 0;
}

.header .content .text {
  max-width: 615px;
  width: 50%;
  text-align: left;
}

.header .content .text h1 {
  font-size: 68px;
  line-height: 80px;
}

.header .content .text p {
  font-size: 24px;
  margin-bottom: 3rem;
}
}
</style>
