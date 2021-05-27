<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 14 : 2" max-width="570" class="flexcard pa-3 mb-4 mr-5 rounded-lg" style="text-decoration: none;">
      <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://dummyimage.com/16:9x1080/'" max-height="200px" class="rounded-lg">
        <v-overlay v-if="hover" absolute>
          <v-btn v-if="Object.keys(token).length !== 0 && isBlogs" fab color="red" @click="$emit('remove', blog.id)">
            <v-icon>mdi mdi-delete</v-icon>
          </v-btn>
        </v-overlay>
        <template v-slot:placeholder>
          <v-skeleton-loader type="image"></v-skeleton-loader>
        </template>
      </v-img>
      <v-card-title class="fill-height align-end subtitle-1"><strong>{{titleLimit}}</strong></v-card-title>
      <v-card-actions>
        <v-btn
            color="#0F3B5F"
            text
            absolute right bottom
            :to="`/blog/${blog.id}`">
          More Details
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "BlogItem",
  props: ['blog'],
  data: () => ({
    apiDomain: 'https://demo-api-vue.sanbercloud.com'
  }),
  computed: {
    titleLimit(){
      if(this.blog.title.length > 30){
        return this.blog.title.substring(0, 50) + '...'
      } else {
        return this.blog.title
      }
    },
    ...mapGetters({
      token: 'auth/token'
    }),
    isBlogs () {
      return (this.$route.path === '/blogs');
    },
  }
}
</script>

<style scoped>

</style>