<template>
  <v-col>
    <SideNavBar />
  </v-col>
</template>

<script>
import AboutView from "@/views/AboutView.vue";
import SideNavBar from "../components/SideNavBar.vue";
export default {
  name: "Home",
  components: {
    SideNavBar,
    AboutView,
  },
};
</script>

<style scoped>
</style>