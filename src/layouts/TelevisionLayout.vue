<template>
  <h1 class="d-flex p-2">{{ tittle }} {{ channelSelected.Name }}</h1>
  <div class="d-flex">
    <div class="p-2 flex-grow-1">
      <TelevisionSpace :channelForTelevision="this.channelSelected" />
    </div>
    <div class="p-2">
      <ChannelList @theChannel="handleChannelUpdate" />
    </div>
  </div>

</template>

<script>
import ChannelList from '@/components/television/ChannelList.vue';
import TelevisionSpace from '@/components/television/TelevisionSpace.vue';
import { TelevisionChannel } from '@/models/television/TelevisionChannel';

export default {
  name: "TelevisionLayout",
  created() { },
  data() {
    return {
      tittle: 'Television',
      channelSelected: TelevisionChannel,
    };
  },
  props: {},
  methods: {
    handleChannelUpdate(value) {
      this.channelSelected = value;
    }
  },
  components: {
    ChannelList,
    TelevisionSpace
  },
};
</script>

<style lang="css" scoped>
.television-layout {
  background-color: aquamarine;
}
</style>