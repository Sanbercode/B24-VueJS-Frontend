<template>
  <v-card class="rounded-lg">
    <v-toolbar dark color="#0F3B5F">
      <v-btn icon dark @click.native="$emit('closed', false)">
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
      <v-toolbar-title>Add New Blog</v-toolbar-title>
    </v-toolbar>

    <v-container fluid>
      <v-form ref="form" v-model="valid" lazy-validation class="pa-3">
        <v-text-field name="title" v-model="title" :rules="titleRules" filled class="rounded-t-lg"
                      label="Title" required append-icon="mdi-format-title" counter>

        </v-text-field>
        <v-textarea name="description" v-model="description" lazy-validation filled auto-grow required :rules="descriptionRules"
                    label="Description" rows="2" row-height="20" append-icon="mdi mdi-image-text" counter
        ></v-textarea>
        <div class="text-xs-center">
          <v-btn color="#0F3B5F" :disabled="!valid" @click.prevent="submit" class="white--text rounded-lg" block>
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
  name: "AddBlog",
  data () {
    return {
      apiDomain: 'https://demo-api-vue.sanbercloud.com',
      valid: true,
      titleRules: [
        v => !!v || 'Title is Required',
        v => (v && v.length > 10) || 'Title must be at least 10 Characters'
      ],
      descriptionRules: [
        v => !!v || 'Description Required',
        v => (v && v.length >= 50) || 'Min 50 Characters'
      ],
      title: '',
      description: ''
    }
  },
  methods: {
    async submit () {
      if (this.$refs.form.validate()) {
        const config = {
          method: 'post',
          url: `${this.apiDomain}/api/v2/blog`,
          headers: {
            'Authorization' : 'Bearer ' + this.token.access_token
          },
          data: {
            title: this.title,
            description: this.description
          }
        }

        try {
          await this.axios(config);
          this.setAlert({
            status: true,
            color: 'primary',
            text: 'Berhasil Menambahkan Blog'
          });
          this.$emit('closed', false);
          this.$emit('refresh');
        } catch (error) {
          console.log(error);
          this.setAlert({
            status: true,
            color: 'error',
            text: 'Gagal menambahkan blog'
          });
        }
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