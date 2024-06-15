<template>
  <h1 class="d-flex p-2">{{ tittle }} {{ channelSelected.name }}</h1>
  <div class="d-flex">
    <div class="p-2 flex-grow-1">
      <TelevisionSpace :channelForTelevision="this.channelSelected.embebedId" />
    </div>
    <div class="p-2">
      <ChannelList @theChannel="handleChannelUpdate" />
    </div>
  </div>

</template>

<script>
import ChannelList from '@/components/television/ChannelList.vue';
import TelevisionSpace from '@/components/television/TelevisionSpace.vue';

export default {
  name: "TelevisionLayout",
  created() { },
  data() {
    return {
      tittle: 'Television',
      channelSelected: String,
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