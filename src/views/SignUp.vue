<template>
  <div class="signup container">
    <div class="login content">
      <h1>Sign up</h1>
      <form>
        <label for="name">Name</label>
        <input
          id="name"
          required
          type="text"
          minlength="4"
          maxlength="30"
          v-model="name">
        <label for="email">Email</label>
        <input
          id="email"
          required
          type="email"
          v-model="email">
        <label for="password">Password</label>
        <input
          id="password"
          required
          type="password"
          minlength="6"
          maxlength="10"
          v-model="password">
        <button @click="submit">Continue</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      password: '',
      email: '',
      errors: [],
    };
  },
  methods: {
    submit() {
      const name = document.querySelector('#name').checkValidity();
      const email = document.querySelector('#email').checkValidity();
      const password = document.querySelector('#password').checkValidity();
      if (name && email && password) this.$router.push('store');
    },
  },
};
</script>
<style scoped>
.signup {
  min-height: 50vh;
}

.signup .login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.signup .login form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  width: 85%;
}

.signup .login form label {
  margin: 2rem 0 0.5rem 0;
  text-align: left;
}

.signup .login form input {
  padding: 0.4rem;
}

.signup .login form button {
  align-self: center;
  margin-top: 1.5rem;
}
</style>
