<template>
  <TopNavBarComponent />
  <div class="container-fluid p-3 fade-enter-active h-auto minimum-heigt">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <FooterComponent />
</template>

<script>
/**
 * Components import section.
 */
import TopNavBarComponent from '@/components/common/TopNavBarComponent.vue';
import FooterComponent from '@/components/common/FooterComponent.vue';

export default {
  name: "MainLayout",
  created() { },
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: {
    TopNavBarComponent,
    FooterComponent
  }
};
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.minimum-heigt {
  min-height: 100%;
}
</style>