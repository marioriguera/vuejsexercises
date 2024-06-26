<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item first-neutral-color" v-for="index in range(0, 10)" :key="index">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed accent-color" type="button" data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + index" aria-expanded="false" aria-controls="collapseOne">
          Top NBA Assists
        </button>
      </h2>
      <div :id="'collapse' + index" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <h1>Top NBA Assistants of 2011</h1>
          <PlayerList :players="players" v-if="players.length" />
          <div v-else>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerList from '@/components/sports/PlayerList.vue';
import { getTopAssistants } from '../services/sports-apis.js';

export default {
  name: 'SportPage',
  components: {
    PlayerList
  },
  data() {
    return {
      players: []
    };
  },
  methods: {
    range(start, end) {
      return Array.from({ length: end - start + 1 }, (_, i) => i + start);
    }
  },
  async created() {
    try {
      const data = await getTopAssistants(2011);
      this.players = data.results;
    } catch (error) {
      console.error('Error fetching top assistants:', error);
    }
  }
};
</script>
