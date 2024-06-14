<template>
  <div class="justRotate m-3">
    <img id="vue-logo" alt="Vue logo" src="./../../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h1>{{ myName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'WelcomeComponent',
  props: {
    msg: String,
    myName: String
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Definimos la animación de rotación en el eje Y */
@keyframes rotateY {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

/* Aplicamos la animación solo a la imagen */
#vue-logo {
  animation: rotateY 5s infinite linear;
  display: block;
  margin: 0 auto; /* Centra la imagen */
}

/* Opcional: Estilos para centrar el contenido del div */
.justRotate {
  text-align: center;
  perspective: 1000px; /* Añade perspectiva para un efecto 3D más pronunciado */
}
</style>
