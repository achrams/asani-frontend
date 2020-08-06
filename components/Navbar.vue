<template>
<div>
  <div class="navbar d-flex justify-content-between fixed-top">
    <div class="d-flex align-items-center">
      <img class="navbar-logo" src="~/assets/asani.png">
      <nuxtLink to="/" class="navbar-brand" href="#">{{text}}</nuxtLink>
    </div>
    <div class="navbar-menu">
      <nuxtLink to="/" class="navbar-link" href="#">Beranda</nuxtLink> |
      <nuxtLink to="/" class="navbar-link" href="#">Katalog</nuxtLink> |
      <nuxtLink to="/" class="navbar-link" href="#">Tentang</nuxtLink> |
      <nuxtLink to="/" class="navbar-link" href="#">Bantuan</nuxtLink> |
      <a href="#" class="navbar-link" @click.prevent="openLogin">Login</a>
    </div>
  </div>
  <Loginform v-if="showLogin" />
</div>
</template>

<script>
import { mapState } from 'vuex'
import Loginform from '@/components/Loginform.vue'

export default {
  computed: mapState([
    'text',
    'showLogin'
  ]),
  methods: {
    openLogin () {
      this.$store.commit('toggleLogin')
    }
  }
}
</script>

<style scoped>
.navbar-logo {
  height: 20px;
  width: 60px;
}

.navbar-brand {
  text-decoration: none;
  color: darkslategrey;
  margin-left: 10px;
}

.navbar-link {
  text-decoration: none;
  color: darkslategrey;
  margin-left: 10px;
  margin-right: 10px;
}
</style>