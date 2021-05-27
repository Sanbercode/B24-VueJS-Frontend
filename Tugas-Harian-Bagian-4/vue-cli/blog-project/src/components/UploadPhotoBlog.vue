<template>
  <v-card class="rounded-lg elevation-13">
    <v-toolbar dark color="#0F3B5F">
      <v-toolbar-title>Upload Photo Blog</v-toolbar-title>
    </v-toolbar>

    <v-container fluid>
      <v-form ref="form" v-model="valid" lazy-validation class="pa-3">
        <v-file-input
            label="Photo Blog"
            filled class="rounded-t-lg"
            append-icon="mdi-image"
            :rules="photoRules"
            name="photo" ref="photo"
            accept="image/*"
        ></v-file-input>

        <div class="text-xs-center">
          <v-btn @click.prevent="submit(blog.id)" type="submit" color="#0F3B5F" :disabled="!valid" class="white--text rounded-lg" block>
            Submit
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UploadPhotoBlog",
  props: ['blog'],
  data(){
    return{
      apiDomain: 'https://demo-api-vue.sanbercloud.com',
      valid: true,
      file: {},
      photoRules: [
        v => !!v || 'Photo Profile is Required'
      ],

    }
  },
  methods: {
    async submit (id) {
      this.file = this.$refs.photo.$refs.input.files[0];
      const formData = new FormData();
      formData.append('photo', this.file);
      const config = {
        method: 'post',
        url: this.apiDomain + `/api/v2/blog/${id}/upload-photo`,
        headers: {
          'Authorization' : 'Bearer ' + this.token.access_token
        },
        data: formData
      }

      try {
        await this.axios(config);
        this.setAlert({
          status: true,
          color: 'primary',
          text: 'Berhasil Upload Photo Blog'
        });
        this.$emit('closed', false);
        this.$emit('refresh');
      } catch (error) {
        console.log(error);
        this.setAlert({
          status: true,
          color: 'error',
          text: 'Gagal Upload Photo Blog'
        });
      }
    },
    ...mapActions({
      setAlert: 'alert/set'
    })
  },
  computed: {
    ...mapGetters({
      token: 'auth/token'
    })
  }
}
</script>

<style scoped>

</style>