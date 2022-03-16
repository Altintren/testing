<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['reservations'])
  },
  methods: {
    ...mapActions(['fetchReservations'])
  },
  created () {
    this.fetchReservations()
  }
}
</script>

<template lang="pug">
  <main>
  h1 Hello World
  div {{ reservations }}
  </main>
</template>
