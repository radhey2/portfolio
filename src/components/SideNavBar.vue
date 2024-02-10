<template>
  <v-app app>
    <v-navigation-drawer
      color="black"
      absolute
      ref="drawer"
      :width="280"
      fixed
      app
      style="
        height: 100%;
        overflow-y: auto;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
      "
    >
      <v-list>
        <v-list-item>
          <v-avatar
            color="info"
            size="x-large"
            image="https://randomuser.me/api/portraits/women/85.jpg"
            style="height: 120px; width: 120px"
            class="ma-5 mx-12"
          >
          </v-avatar>
          <p
            class="font-weight-black text-h5 text-color-white"
            style="text-align: center"
          >
            Alex Smith
          </p>
        </v-list-item>
        <v-list-item>
          <v-row>
            <v-btn
              class="ma-5"
              color="indigo"
              icon="mdi-twitter"
              size="20"
            ></v-btn>
            <v-btn
              class="ma-5"
              color="indigo"
              icon="mdi-facebook"
              size="20"
            ></v-btn>
            <v-btn
              class="ma-5"
              color="indigo"
              icon="mdi-instagram"
              size="20"
            ></v-btn>
            <v-btn
              class="ma-5"
              color="indigo"
              icon="mdi-linkedin"
              :size="20"
            ></v-btn>
          </v-row>
        </v-list-item>
      </v-list>
      <v-list density="compact" nav>
        <v-btn variant="text">
          <router-link to="/">
            <v-list-item
              prepend-icon="mdi-home-outline"
              class="text-h5"
              title="Home"
            ></v-list-item>
          </router-link>
        </v-btn>
        <router-link to="/about" @click.prevent>
          <v-btn variant="text">
            <v-list-item
              prepend-icon="mdi-account-outline"
              class="text-h5"
              title="About"
            ></v-list-item></v-btn
        ></router-link>
        <router-link to="/resume">
          <v-btn variant="text">
            <v-list-item
              prepend-icon="mdi-file-outline"
              class="text-h5"
              title="Resume"
            ></v-list-item></v-btn
        ></router-link>
        <router-link to="/portfolio">
          <v-btn variant="text">
            <v-list-item
              prepend-icon="mdi-book-open-outline"
              class="text-h5"
              title="Portfolio"
            ></v-list-item></v-btn
        ></router-link>
        <router-link to="/service">
          <v-btn variant="text"
            ><v-list-item
              prepend-icon="mdi-server-plus"
              class="text-h5"
              title="Service"
            ></v-list-item></v-btn
        ></router-link>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <intro></intro>
      <about-view></about-view>
      <resume></resume>
      <portfolio></portfolio>
      <service></service>
      <contact></contact>
    </v-main>
  </v-app>
</template>

<script>
import AboutView from "@/views/AboutView.vue";
import Intro from "@/components/Intro.vue";
import Resume from "@/components/Resume.vue";
import Portfolio from "@/components/Portfolio.vue";
import Service from "@/components/Service.vue";
import Contact from "@/components/Contact.vue";
export default {
  components: { AboutView, Intro, Resume, Portfolio, Service, Contact },
  name: "SideNavBar",

  data() {
    return {
      name: "Alex Smith",
      dynamicText: "Initial Text",
    };
  },

  created() {
    // Start a timer to update the text
    setInterval(() => {
      this.dynamicText = this.generateRandomText();
    }, 1000); // Change text every 3 seconds
  },
  methods: {
    generateRandomText() {
      // List of texts
      const textList = ["Freelancer", "Developer"];

      // Generate a random index to select text from the list
      const randomIndex = Math.floor(Math.random() * textList.length);

      // Return the text corresponding to the random index
      return textList[randomIndex];
    },
  },
};
</script>

<style>
</style>