<template>
  <div class="ma-10 about">
    <h1 class="text-decoration-underline">About</h1>
    <p>
      Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
      aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
      quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
      sit in iste officiis commodi quidem hic quas.
    </p>
  </div>
  <div>
    <v-row>
      <v-col cols="4">
        <v-img
          :src="require('@/assets/images/profile-img.jpg')"
          class="mx-5"
        ></v-img>
      </v-col>
      <v-col>
        <h1>UI/UX Designer & Web Developer.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-row align="center">
                <v-col cols="1">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
                <v-col cols="">
                  <span class="pa-0"><b>Birthday:</b> 1 May 1995</span>
                </v-col>
                <v-col cols="1">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
                <v-col cols="">
                  <span><b>Age:</b> 30</span>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="1">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
                <v-col cols="">
                  <span><b>Website:</b> www.example.com</span>
                </v-col>
                <v-col cols="1">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
                <v-col cols="">
                  <span><b>Degree:</b> Master</span>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="1">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
                <v-col cols="">
                  <span><b>Phone:</b> +123 456 7890</span>
                </v-col>
                <v-col cols="1">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
                <v-col cols="">
                  <span><b>PhEmailone:</b> email@example.com</span>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="1">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
                <v-col cols="">
                  <span><b>City:</b> New York, USA</span>
                </v-col>
                <v-col cols="1">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-col>
                <v-col cols="">
                  <span><b>Freelance:</b> Available</span>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <p>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio
          vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
          incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
          officiis quidem quia. Sed et consectetur qui quia repellendus itaque
          neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
          repellendus omnis culpa magni laudantium dolores.
        </p>
      </v-col>
    </v-row>
  </div>
  <div class="mx-5">
    <h1 class="mt-16 text-decoration-underline">Facts</h1>
    <p class="mt-5">
      Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
      aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
      quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
      sit in iste officiis commodi quidem hic quas.
    </p>
  </div>
  <v-container class="bg-blue-lighten-5 mt-15" style="height: 400px"
    ><h1 class="text-decoration-underline">Skills</h1>
    <p class="mt-8">
      Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
      aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
      quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
      sit in iste officiis commodi quidem hic quas.
    </p>
    <div class="mt-10">
      <v-row>
        <v-col cols="5"
          ><h5>HTML</h5>
          <v-progress-linear
            model-value="100"
            :height="8"
            color="blue-lighten-2"
          ></v-progress-linear>
        </v-col>
        <v-col cols="5"
          ><h5>PHP</h5>
          <v-progress-linear
            model-value="80"
            :height="8"
            color="blue-lighten-2"
          ></v-progress-linear>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5"
          ><h5>CSS</h5>
          <v-progress-linear
            model-value="90"
            :height="8"
            color="blue-lighten-2"
          ></v-progress-linear>
        </v-col>
        <v-col cols="5"
          ><h5>CMS/WORDPRESS</h5>
          <v-progress-linear
            model-value="90"
            :height="8"
            color="blue-lighten-2"
          ></v-progress-linear>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5"
          ><h5>JAVASCRIPT</h5>
          <v-progress-linear
            model-value="75"
            :height="8"
            color="blue-lighten-2"
          ></v-progress-linear>
        </v-col>
        <v-col cols="5"
          ><h5>PHOTOSHOP</h5>
          <v-progress-linear
            model-value="55"
            :height="8"
            color="blue-lighten-2"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
