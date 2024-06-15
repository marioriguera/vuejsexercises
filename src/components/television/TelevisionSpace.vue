<template>
  <!--
  @template
  @description
  The template section defines the structure of the component's HTML.
  It includes a video player using the vue-plyr component, configured to play a YouTube video.
  -->
  <div class="repro-style">
    <vue-plyr :key="embedId" :options="plyrOptions">
      <div data-plyr-provider="youtube" :data-plyr-embed-id="embedId" allowfullscreen allow="autoplay" />
    </vue-plyr>
  </div>
</template>

<script>
export default {
  name: "TelevisionSpace",
  created() {
    console.warn("Component TelevisionSpace was created.");
  },
  updated() {
    console.warn("Component TelevisionSpace was updated with channel " + this.channelForTelevision);
  },
  watch: {
    channelForTelevision(value) {
      console.warn("This is on channel for television watcher :" + value);
      this.embedId = value;
    }
  },
  /**
   * @name props
   * @description Props received by the component from its parent.
   * @property {String} embedIdFromParent - The embed ID of the YouTube video, passed from the parent component.
   */
  props: {
    channelForTelevision: String
  },
  /**
   * @name data
   * @description Data properties for the component.
   * @returns {Object} The data object containing the embed ID and player options.
   * @property {String} embedId - The embed ID of the YouTube video to be played.
   * @property {Object} plyrOptions - The options object for configuring the vue-plyr component.
   */
  data() {
    return {
      embedId: 'oFOTr81KHLg',
      plyrOptions: {
        autoplay: true,
        muted: true,  // Mute the video to allow autoplay
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        youtube: {
          noCookie: true, // Use YouTube's no-cookie domain
          rel: 0, // Do not show related videos at the end
        },
      },
    };
  },
};
</script>

<style lang="css" scoped>
/**
 * @style
 * @description Styles scoped to the TelevisionSpace component.
 * @property .repro-style - Ensures the video player occupies the full width and height of its container.
 */
.repro-style {
  width: 100%;
  height: calc(90vh - 50px);
  /* Ajusta según la altura de tu footer */
  overflow: hidden;
  position: relative;
}

.repro-style vue-plyr div {
  width: 100%;
  height: 90%;
  max-width: 100%;
  max-height: 90%;
  object-fit: cover;
  /* cover, contain, fill, etc., según el efecto deseado */
}
</style>
