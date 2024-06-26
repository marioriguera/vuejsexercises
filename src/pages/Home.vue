<template>
  <div>
    <!-- v-bind: Binding dinámico de atributos -->
    <img :src="imageSrc" :class="{ 'border-image-rounded': isVisible, 'image-size': true }"
      alt="Descripción de la imagen" />

    <!-- v-if: Renderizado condicional -->
    <p v-if="isVisible">Este párrafo solo se muestra si isVisible es true</p>

    <!-- v-show: Mostrar u ocultar elementos -->
    <p v-show="isVisible">Este párrafo está siempre en el DOM pero se muestra/oculta según isVisible</p>

    <!-- v-for: Renderizado de listas -->
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>

    <!-- v-on: Manejo de eventos -->
    <button type="button" class="btn btn-primary" v-on:click="handleClick">Haz clic aquí</button>

    <h2>Simple Chat</h2>
    <div class="d-flex justify-content-evenly">
      <div class="p-2">
        <textarea class="chat-box" v-model="message" placeholder="Type your message here" />
      </div>
      <div class="P-2">
        <p class="chat-box" align="justify">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  created() { },
  data() {
    return {
      imageSrc: 'https://media.licdn.com/dms/image/D4E03AQFY8FSWd1SfrQ/profile-displayphoto-shrink_800_800/0/1696326802617?e=1724284800&v=beta&t=PGH4tWM5bykclbGKDO-jXYxWl0xE97xMtd7je56nTNk',
      isVisible: true,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      message: '',
      messages: []
    };
  },
  props: {},
  methods: {
    handleClick() {
      this.isVisible = !this.isVisible;
      alert('Botón clickeado!');
    },
    sendMessage() {
      if (this.message.trim()) {
        this.messages.push(this.message);
        this.message = '';
      }
    }
  },
};
</script>

<style lang="css" scoped>
.image-size {
  width: 20%;
  height: 20%;
}

.border-image-rounded {
  border-radius: 100%;
}

.chat-box {
  width: 300px;
  max-width: 300px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>