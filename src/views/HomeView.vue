<template>
  <div>
    <SideNavBar />
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Home from "../components/Home.vue";
import SideNavBar from "../components/SideNavBar.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    SideNavBar,
    Home,
  },
});
</script>
