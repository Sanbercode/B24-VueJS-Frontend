<template>
  <v-card class="flexcard pa-3 mb-4 mr-5 rounded-lg" style="text-decoration: none;">
    <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://dummyimage.com/16:9x1080/'" height="50%" class="rounded-lg">
      <template v-slot:placeholder>
        <v-skeleton-loader type="image"></v-skeleton-loader>
      </template>
    </v-img>
    <v-card-title class="fill-height align-end"><h3>{{blog.title}}</h3></v-card-title>
    <v-card-text>
      <v-simple-table>
        <tbody>
        <tr>
          <td>{{blog.description}}</td>
        </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Blog",
  data: () => ({
    blog: [],
    apiDomain: 'https://demo-api-vue.sanbercloud.com'
  }),
  methods: {
    async go () {
      let { id } = this.$route.params;

      const config = {
        method: 'get',
        url: `${this.apiDomain}/api/v2/blog/${id}`
      }

      try {
        const response = await this.axios(config);
        let { blog } = response.data;
        this.blog = blog;

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