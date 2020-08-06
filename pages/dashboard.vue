<template>
<transition name="page">
  <div class="container">
    <div>
      <Navbar />
      <div class="content">
        <button @click.prevent="openLogin" class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Loginform from '@/components/Loginform.vue'
import { mapState } from 'vuex'

export default {
  transition: 'page',
  components: {
    Navbar
  },
  created () {
    if (this.$store.state.text === 'Home') {
      this.$store.commit('changeText')
    }
  },
  methods: {
    openLogin () {
      this.$store.commit('toggleLogin')
    }
  }
}
</script>

<style>
.content {
  margin: 300px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
