<template>
  <v-container class="ma-0 pa-0 mx-auto" grid-list-sm>
    <div class="text-right">
      <v-btn small text to="/blogs" class="blue--text" style="text-decoration: none; ">
        All Blogs <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <v-layout wrap>
      <v-flex xs15 sm8 md6 lg4 v-for="(blog) in blogs" :key="`campaign-${blog.id}`">
        <blog-item :blog="blog" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BlogItem from "../components/BlogItem";
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "Home",
  components: { BlogItem },
  data: () => ({
    apiDomain: 'https://demo-api-vue.sanbercloud.com',
    blogs: []
  }),
  methods: {
    async go () {
      const config = {
        method: 'get',
        url: this.apiDomain + '/api/v2/blog/random/6'
      }

      try {
        const response = await this.axios(config);
        let {blogs} = response.data;
        this.blogs = blogs;
      } catch (error) {
        console.log(error);
      }
    },
    ...mapMutations({

    })
  },
  computed: {
    ...mapGetters({

    })
  },
  async created () {
    await this.go();
  }
}
</script>

<style scoped>

</style>
