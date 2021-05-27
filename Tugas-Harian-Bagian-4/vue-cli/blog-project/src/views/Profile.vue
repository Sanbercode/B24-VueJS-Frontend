<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-col md="5">
        <v-card elevation="10" class="pa-2 rounded-lg" tile-outlined>
          <v-toolbar dark color="#0F3B5F">
            <v-toolbar-title><strong>Profile</strong></v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row justify="center">
              <v-col md="4">
                <v-img :src="user.photo_profile ? this.apiDomain + user.photo_profile : 'https://dummyimage.com/16:9x1080/'" class="rounded-circle mx-auto" style="object-fit: cover;" max-width="500px">
                  <template v-slot:placeholder>
                    <v-skeleton-loader type="image"></v-skeleton-loader>
                  </template>

                </v-img>
              </v-col>
            </v-row>
            <v-simple-table class="mt-5">
              <tbody>
              <tr>
                <td><v-icon left>mdi-account</v-icon> Nama</td>
                <td>{{user.name}}</td>
              </tr>
              <tr>
                <td><v-icon left>mdi-email</v-icon> Email</td>
                <td>{{user.email}}</td>
              </tr>
              </tbody>
            </v-simple-table>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Profile",
  data: () => ({
    apiDomain: 'https://demo-api-vue.sanbercloud.com'
  }),
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
}
</script>

<style scoped>

</style>