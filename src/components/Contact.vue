<template>
  <div class="mt-15">
    <h1 class="text-decoration-underline ma-4">Contact</h1>
    <p class="ma-4">
      Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
      aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
      quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
      sit in iste officiis commodi quidem hic quas.
    </p>
  </div>
  <div class="ma-5">
    <v-row
      ><v-col cols="4">
        <v-card :elevation="5">
          <v-col style="display: flex; flex-direction: column">
            <v-row>
              <v-avatar
                icon="mdi-map-marker"
                color="info"
                class="pa-6 ma-6"
              ></v-avatar>
              <v-col>
                <h3 class="mt-5">Location</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </v-col>
            </v-row>
            <v-row>
              <v-avatar
                icon="mdi-email"
                color="info"
                class="pa-6 ma-6"
              ></v-avatar>
              <v-col>
                <h3 class="mt-5">Email</h3>
                <p>abcv@gmail.com</p>
              </v-col>
            </v-row>
            <v-row>
              <v-avatar
                icon="mdi-phone-dial"
                color="info"
                class="pa-6 ma-6"
              ></v-avatar>
              <v-col>
                <h3 class="mt-5">Phone</h3>
                <p>+919829340270</p>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>

      <v-col cols="">
        <v-card :elevation="5">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="FirstName"
                    variant="outlined"
                    style="width: 240px"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="LastName"
                    variant="outlined"
                    style="width: 240px"
                  ></v-text-field>
                </v-col>
                <v-responsive width="100%"></v-responsive>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Subject"
                    variant="outlined"
                    style="width: 540px"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Message"
                    variant="outlined"
                    style="width: 540px"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="success">
                  Complete Registration

                  <v-icon icon="mdi-chevron-right" end></v-icon>
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>