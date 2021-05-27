<template>
  <v-container class="ma-0 pa-0 mx-auto" grid-list-sm>
    <keep-alive>
      <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
        <component @refresh="go" :is="currentComponent" @closed="setDialogStatus"></component>
      </v-dialog>
    </keep-alive>

    <v-subheader>
      All Blogs
    </v-subheader>

    <v-layout wrap>
      <v-flex v-for="(blog) in blogs" :key="`campaign-` + blog.id">
        <blog-item @remove="remove" :blog="blog"/>
      </v-flex>
    </v-layout>

    <v-pagination v-model="page" @input="go" :length="lengthPage" :total-visible="7"></v-pagination>
    <a @click="setDialogComponent('AddBlog')"
       v-if="Object.keys(token).length !== 0"
       class="act-btn"><v-icon>mdi mdi-plus</v-icon></a>
  </v-container>
</template>

<script>
import BlogItem from "../components/BlogItem";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Blogs",
  components: {
    BlogItem,
    AddBlog: () => import('../components/AddBlog.vue'),
    Login: () => import('../components/Login.vue'),
  },
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
    },
    remove (id) {
      this.$swal({
        showConfirmButton: true,
        confirmButtonText: 'Yes',
        showDenyButton: true,
        title: 'Apakah anda yakin?',
        icon: 'warning'
      }).then(async res => {
        if(res.isConfirmed) {
          const config = {
            method: 'post',
            url: this.apiDomain + `/api/v2/blog/${id}`,
            params: {_method: 'DELETE'},
            headers: {
              'Authorization' : 'Bearer ' + this.token.access_token
            }
          }

          try {
            await this.axios(config);
            this.setAlert({
              status: true,
              color: 'primary',
              text: 'Berhasil Menghapus'
            });
            await this.go();
          } catch (error) {
            console.log(error);
            this.setAlert({
              status: true,
              color: 'error',
              text: 'Gagal Menghapus Blog'
            })
          }

        }
      })
    },
    ...mapActions({
      setDialogStatus: 'dialog/setStatus',
      setDialogComponent: 'dialog/setComponent',
      setAlert: 'alert/set'
    })
  },
  computed: {
    ...mapGetters({
      token: 'auth/token',
      dialogStatus: 'dialog/status',
      currentComponent: 'dialog/component',
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
  .act-btn{
    background: #eeebee;
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: black;
    font-size: 30px;
    font-weight: bold;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    text-decoration: none;
    transition: ease all 0.3s;
    position: fixed;
    right: 30px;
    bottom: 70px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
  }
  .act-btn:hover{background: #d3d3d3}
</style>