<template>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action selected" v-for="item in channelList"
      :key="item.EmbedId" :id="item.EmbedId" type="button" :class="{ 'selected': selectedChannelId === item.EmbedId }"
      @click="selectItem(item)">
      {{ item.Name }}</a>
  </div>
  <p>{{ selectedChannel.name }}</p>
</template>

<script>
import { TelevisionChannel } from '@/models/television/TelevisionChannel'

export default {
  name: "ChanelList",
  data() {
    return {
      selectedChannelId: '',
      selectedChannel: new TelevisionChannel('', '')
      ,
      channelList: [
        new TelevisionChannel('ABC7', 'oFOTr81KHLg'),
        new TelevisionChannel('NBC', '8CIgYtfXK7k'),
        new TelevisionChannel('Sky News', 'uswcSlg5T-Q'),
        new TelevisionChannel('Al Jazeera English', 'gCNeDWCI0vo'),
        new TelevisionChannel('ABC World News', 'FTERRecoafo'),
        new TelevisionChannel('France 24 English', 'tkDUSYHoKxE')
      ],
    };
  },
  created() {
    if (this.channelList.length > 0) {
      this.selectItem(this.channelList[0]);
    }
  },
  props: {},
  emits: ['theChannel'],
  methods: {
    selectItem(channel) {
      this.selectedChannel = channel;
      this.sendChannel();
    },
    sendChannel() {
      this.$emit('theChannel', this.selectedChannel);
    }
  },
};
</script>

<style lang="css" scoped>
.selected:active {
  background-color: aquamarine;
}

.selected::selection {
  background-color: black;
}
</style>
