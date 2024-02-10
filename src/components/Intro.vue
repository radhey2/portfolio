<template>
  <div>
    <v-img
      :src="require('@/assets/images/hero-bg.jpg')"
      style="display: flex; justify-content: center; align-items: center"
    >
      <div
        class="text-center mx-15 text-center text-h4"
        style="
          position: absolute;
          top: 26%;
          right: 25%;
          transform: translate(-50%, -40%);
        "
      >
        <v-row>
          <h2>{{ name }}</h2>
        </v-row>
        <v-divider vertical></v-divider>
        <v-row>
          <p>I'm</p>
          <h3 style="border-bottom: 3px solid rgb(35, 181, 229)">
            {{ dynamicText }}
          </h3>
        </v-row>
      </div>
    </v-img>
  </div>
</template>
<script>
export default {
  name: "Intro",

  data() {
    return {
      name: " Radhey",
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