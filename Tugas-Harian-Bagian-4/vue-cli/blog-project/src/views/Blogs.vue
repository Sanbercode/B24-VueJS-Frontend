<template>
  <v-container class="ma-0 pa-0 mx-auto" grid-list-sm>
    <v-subheader>
      All Blogs
    </v-subheader>

    <v-layout wrap>
      <v-flex  v-for="(blog) in blogs" :key="`campaign-` + blog.id">
        <blog-item :blog="blog"/>
      </v-flex>
    </v-layout>

    <v-pagination v-model="page" @input="go" :length="lengthPage" :total-visible="7"></v-pagination>

  </v-container>
</template>

<script>
import BlogItem from "../components/BlogItem";

export default {
  name: "Blogs",
  components: {BlogItem},
  data: () => ({
    apiDomain: 'https://demo-api-vue.sanbercloud.com',
    blogs: [],
    page: 0,
    lengthPage: 0,
    perPage: 0
  }),
  methods: {
    async go () {
      const config = {
        method: "get",
        url: this.apiDomain + '/api/v2/blog?page=' + this.page
      }

      try {
        const response = await this.axios(config);
        let { blogs } = response.data;
        this.blogs = blogs.data;
        this.page = blogs.current_page;
        this.lengthPage = blogs.last_page;
        this.perPage = parseInt(blogs.per_page) + 2;
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created () {
    await this.go();
  }
}
</script>

<style scoped>

</style>