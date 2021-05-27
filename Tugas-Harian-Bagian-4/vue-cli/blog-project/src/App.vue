<template>
  <!-- App.vue -->
  <v-app>
    <alert/>

    <keep-alive>
      <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
        <component :is="currentComponent" @closed="setDialogStatus"></component>
      </v-dialog>
    </keep-alive>

    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item v-if="!guest" to="/profile" style="text-decoration: none;">
          <v-list-item-avatar>
            <v-img :src="user.photo_profile ? 'http://demo-api-vue.sanbercloud.com/' + user.photo_profile : 'https://randomuser.me/api/portraits/men/70.jpg'"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <strong>{{ user.name }}</strong>
              <v-icon right>mdi-arrow-right-circle</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <div class="pa-2" v-if="guest">
          <v-btn block color="#0F3B5F" class="white--text mb-2 rounded-pill" @click="setDialogComponent('Login')">
            <v-icon left>mdi-lock</v-icon>
            Login
          </v-btn>
          <v-btn block color="red darken-2" class="white--text rounded-pill" to="/register" @click="drawer = !drawer">
            <v-icon left>mdi-account</v-icon>
            Register
          </v-btn>
        </div>

        <v-divider></v-divider>

        <v-list-item v-for="(item, index) in menus" :key="`menu-${index}`" :to="item.route">
          <v-list-item-icon>
            <v-icon left>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{item.title}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append v-if="!guest">
        <div class="pa-2">
          <v-btn block color="red" class="rounded-pill" @click="logout" dark>
            <v-icon left>mdi-lock</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="#0F3B5F" dark v-if="!isRegister">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn v-if="!isHome" icon @click.stop="$router.go(-1)">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <v-toolbar-title @click="$router.push('/')" style="cursor: pointer;"><strong>Blog Application</strong></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn fab absolute bottom right small @click="setDialogComponent('AddBlog')"
             class="mr-2 black--text" color="white"
             v-if="Object.keys(token).length !== 0 && isBlogs"
      >
        <v-icon>mdi mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app padless>
      <v-col class="text-center" cols="12">
        &copy;{{ new Date().getFullYear() }} — <strong>Blog App</strong> — by Rully Afrizal Alwin
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: 'App',
  components: {
    Alert: () => import('./components/Alert.vue'),
    Login: () => import('./components/Login.vue'),
    AddBlog: () => import('./components/AddBlog.vue')
  },
  data: () => ({
    drawer: false,
    menus: [
      {title: 'Home', icon: 'mdi-home', route: '/'},
      {title: 'Blogs', icon: 'mdi-blogger', route: '/blogs'}
    ],
  }),
  methods: {
    ...mapActions({
      setAlert: 'alert/set',
      setDialogStatus: 'dialog/setStatus',
      setDialogComponent: 'dialog/setComponent',
      setToken: 'auth/setToken',
      setUser: 'auth/setUser',
    }),
    async logout () {
      const config = {
        method: 'post',
        url: 'https://demo-api-vue.sanbercloud.com/api/v2/auth/logout',
        headers: {
          'Authorization': 'Bearer ' + this.token.access_token
        }
      }
      try {
        await this.axios(config);

        this.setToken({});

        this.setAlert({
          status: true,
          color: 'success',
          text: 'Successfully Logout'
        });
      } catch (error) {
        console.log(error);
        this.setAlert({
          status: true,
          color: 'error',
          text: 'Logout Fail'
        });
      }

    }
  },
  computed: {
    isHome(){
      return (this.$route.path === '/' || this.$route.path === '/home');
    },
    isRegister () {
      return (this.$route.path === '/register');
    },
    isBlogs () {
      return (this.$route.path === '/blogs');
    },
    ...mapGetters({
      dialogStatus: 'dialog/status',
      currentComponent: 'dialog/component',
      guest: 'auth/guest',
      token: 'auth/token',
      user: 'auth/user'
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
  mounted(){
    if(this.token){
      this.setUser(this.token);
    }
  },
};
</script>
