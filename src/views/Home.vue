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
        <h1 class="dark-text">Why us</h1>
        <div>
          <div class="info-block">
            <div class="dot"></div>
            <p>Home Delivery</p>
            <p>&#8964;</p>
            <p class="hide">Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Maecenas tortor lorem, vehicula eget est sed, malesuada suscipit  magna. Curabitur eu consectetur augue.</p>
          </div>
          <div class="info-block">
            <div class="dot"></div>
            <p>Tea Personalization</p>
            <p>&#8964;</p>
            <p class="hide">Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Maecenas tortor lorem, vehicula eget est sed, malesuada suscipit  magna. Curabitur eu consectetur augue.</p>
          </div>
          <div class="info-block">
            <div class="dot"></div>
            <p>Premium Quality</p>
            <p>&#8964;</p>
            <p class="hide">Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Maecenas tortor lorem, vehicula eget est sed, malesuada suscipit  magna. Curabitur eu consectetur augue.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="signup-footer container">
      <div class="content">
        <div>
          <h2>SIGN UP</h2>
          <p>Get the best tea experience you’ll be ever taste right at your door each month</p>
          <button class="dark-background">Sign up</button>
        </div>
        <div class="desktop bg-img"></div>
      </div>
      <img class="mobile" src="/assets/tea_pot_mobile.jpg">
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
  margin: 6rem auto -50% auto;
  max-width: 400px;
}

.header .content .text {
  max-width: 500px;
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

.info .content {
  padding: 50% 1rem 3rem 1rem ;
}

.info .content > h1 {
  font-weight: 500;
  font-size: 40px;
}

.info .content .info-block {
  margin: 4rem auto;
  width: fit-content;
  cursor: pointer;
}

.info .content .info-block p:first-of-type {
  margin-bottom: 0;
  font-size: 24px;
  line-height: 36px;
  color: #000;
}

.info .content .info-block:hover {
  text-decoration: underline;
}

.info .content .info-block p:nth-child(3) {
  margin-top: 0;
  color: #646464;
}

.info .content .info-block .dot {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: block;
  margin: auto;
  background-color: #24404F;
}

.signup-footer {
  background: #495664;
  color: #FFF;
  flex-direction: column;
  align-items: center;
}

.signup-footer .content {
  width: 70%;
  max-width: 400px;
  padding: 3rem 1rem 4rem;
}

.signup-footer .content h2 {
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  margin-bottom: 1rem;
}

.signup-footer .content p {
  font-size: 18px;
  line-height: 36px;
}

.signup-footer .content button {
  color: #FFF;
}

.signup-footer img {
  width: 100%;
  filter: brightness(0.6);
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

.info .content {
  padding: 7rem 1rem 6rem 1rem ;
}

.info .content > div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.signup-footer {
  height: 387px;
}

.signup-footer .content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  max-width: 1312px;
  padding: 0;
  justify-content: space-between;
}

.signup-footer .content > div {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0rem 2rem 0rem 3rem;
  width: 40%;
  max-width: 480px;
  text-align: left;
}

.signup-footer .content h2 {
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  margin-top: 0;
}

.signup-footer .content p {
  font-size: 24px;
  line-height: 36px;
}

.signup-footer .content .bg-img {
  width: 60%;
  max-width: 822px;
  background-image: linear-gradient(rgba(11, 17, 19, 0.36), rgba(11, 17, 19, 0.36)), url("/assets/tea_pot.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

}
</style>
