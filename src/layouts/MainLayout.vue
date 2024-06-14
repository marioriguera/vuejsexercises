<template>
  <TopNavBarComponent/>
  <div class="container h-100">
    <!--Welcome msg="Welcome to Your Vue.js App" myName="Mario David Riguera Castillo"/-->
    <router-view></router-view>
  </div>
  <FooterComponent/>
</template>

<script>
/**
 * Components import section.
 */
import TopNavBarComponent from '@/components/common/TopNavBarComponent.vue';
/**import Welcome from '@/components/common/Welcome.vue';*/
import FooterComponent from '@/components/common/FooterComponent.vue';

export default {
  name: "MainLayout",
  created() { },
  data() {
    return {};
  },
  props: {},
  methods: {},
  components:{
    TopNavBarComponent,
    /**Welcome,*/
    FooterComponent
  }
};
</script>

<style lang="css" scoped></style>