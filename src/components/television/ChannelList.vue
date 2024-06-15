<template>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action selected" v-for="item in channelList"
      :key="item.embebedId" :id="item.embebedId" type="button"
      :class="{ 'selected': selectedChannelId === item.embebedId }" @click="selectItem(item)">
      {{ item.name }}</a>
  </div>
  <p>{{ selectedChannel.name }}</p>
</template>

<script>
export default {
  name: "ChanelList",
  data() {
    return {
      selectedChannelId: null,
      selectedChannel: {
        name: '',
        embebedId: ''
      },
      channelList: [
        { name: 'ABC7', embebedId: 'oFOTr81KHLg' },
        { name: 'NBC', embebedId: '8CIgYtfXK7k' },
        { name: 'Sky News', embebedId: 'uswcSlg5T-Q' },
        { name: 'Al Jazeera English', embebedId: 'gCNeDWCI0vo' },
        { name: 'ABC World News', embebedId: 'FTERRecoafo' },
        { name: 'France 24 English', embebedId: 'tkDUSYHoKxE' },
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
      const value = this.selectedChannel;
      this.$emit('theChannel', value);
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
