<template>
  <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">{{ player.player_name }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ player.team }} - {{ player.season }}</h5>
      <p class="card-text">Age: {{ player.age }}</p>
      <p class="card-text">Games Played: {{ player.games }}</p>
      <p class="card-text">Assists: {{ player.AST }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  props: {
    player: Object
  }
};
</script>

<style scoped>
.card {
  margin: 0.5rem;
}
</style>
