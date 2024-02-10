<template>
  <v-container class="bg-blue-lighten-5 mt-15" style="height: 900px">
    <div>
      <h1 class="text-decoration-underline ma-4">Portfolio</h1>
      <p class="ma-4">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
    </div>
    <div>
      <v-tabs color="deep-purple-accent-4" align-tabs="center" v-model="tab">
        <v-tab :value="1">ALL</v-tab>
        <v-tab :value="2">APP</v-tab>
        <v-tab :value="3">CARD</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item v-for="n in 3" :key="n" :value="n">
          <v-container fluid>
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" md="4">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${
                    i * n * 5 + 10
                  }`"
                  aspect-ratio="1"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>