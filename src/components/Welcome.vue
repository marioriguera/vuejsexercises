<template>
  <div class="container h-100 w-100">
    <h1>{{msg}}</h1>
    <h1>{{myName}}</h1>
  </div>
</template>

<script>
export default {
  name: 'WelcomeComponent',
  props: {
    msg: String,
    myName: String
  },
  methods: {
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
