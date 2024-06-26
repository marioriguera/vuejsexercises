<template>
  <div class="d-flex flex-wrap">
    <PlayerCard v-for="player in players" :key="player.id" :player="player" class="p-2 flex-fill"/>
  </div>
</template>

<script>
import PlayerCard from './PlayerCard.vue';

export default {
  name: 'PlayerList',
  components: {
    PlayerCard
  },
  props: {
    players: Array
  }
};
</script>

<style scoped>
.row {
  margin-top: 2rem;
}
</style>
