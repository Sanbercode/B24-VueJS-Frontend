<template>
  <v-container>

    <keep-alive>
      <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
        <component :blog="blog" :is="currentComponent" @refresh="go" @closed="setDialogStatus"></component>
      </v-dialog>
    </keep-alive>

    <v-subheader>
      Blog / {{blog.id}}
    </v-subheader>
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
      <v-menu v-if="Object.keys(token).length !== 0" open top offset-y rounded="lg">
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab color="#0F3B5F" dark v-bind="attrs" v-on="on" absolute bottom right>
            <v-icon>mdi mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-btn class="white--text" color="yellow darken-3" @click="setDialogComponent('EditBlog')"><v-icon>mdi mdi-pencil</v-icon></v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn class="white--text" color="info" @click="setDialogComponent('UploadPhotoBlog')"><v-icon>mdi mdi-upload</v-icon></v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Blog",
  components: {
    EditBlog: () => import('../components/EditBlog.vue'),
    UploadPhotoBlog: () => import('../components/UploadPhotoBlog.vue'),
    Login: () => import('../components/Login.vue'),
  },
  data: () => ({
    blog: [],
    apiDomain: 'https://demo-api-vue.sanbercloud.com',
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
    },
    ...mapActions({
      setDialogComponent: 'dialog/setComponent',
      setDialogStatus: 'dialog/setStatus',
      setAlert: 'alert/set'
    })
  },
  computed: {
    ...mapGetters({
      dialogStatus: 'dialog/status',
      currentComponent: 'dialog/component',
      token: 'auth/token'
    }),
    dialog: {
      get(){
        return this.dialogStatus
      },
      set(value){
        this.setDialogStatus(value)
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