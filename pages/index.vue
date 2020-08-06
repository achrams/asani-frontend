<template>
  <transition name="page">
  <div class="container">
    <div>
      <Navbar />
      <div class="content">
        <button to="/dashboard" @click.prevent="changePage" class="btn btn-primary">To Dashboard</button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapState } from 'vuex'

export default {
  transition: 'page',
  components: {
    Navbar
  },
  methods: {
    changePage () {
      this.$router.push('/dashboard')
      setTimeout(() => {
      this.$store.commit('changeText')
      }, 300)
    }
  },
  created () {
    if (this.$store.state.text === 'Dashboard') {
      this.$store.commit('changeText')
    }
  }
}
</script>

<style>
.content {
  margin: 300px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
