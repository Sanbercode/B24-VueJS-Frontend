<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :to="'/blog/' + blog.id" :elevation="hover ? 14 : 2" max-width="570" class="flexcard pa-3 mb-4 mr-5 rounded-lg" style="text-decoration: none;">
      <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://dummyimage.com/16:9x1080/'" max-height="200px" class="rounded-lg">
        <template v-slot:placeholder>
          <v-skeleton-loader type="image"></v-skeleton-loader>
        </template>
      </v-img>
      <v-card-title class="fill-height align-end subtitle-1"><strong>{{titleLimit}}</strong></v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "BlogItem",
  props: ['blog'],
  data: () => ({
    apiDomain: 'https://demo-api-vue.sanbercloud.com'
  }),
  computed: {
    titleLimit(){
      if(this.blog.title.length > 20){
        return this.blog.title.substring(0, 50) + '...'
      } else {
        return this.blog.title
      }
    }
  }
}
</script>

<style scoped>

</style>