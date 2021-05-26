<template>
  <v-snackbar v-model="alert" :color="color" buttom timeout="5000" elevation="24" multi-line>
    {{text}}
    <template v-slot:action="{attrs}">
      <v-btn text v-bind="attrs" @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Alert",
  computed: {
    ...mapGetters({
      status: 'alert/status',
      color: 'alert/color',
      text: 'alert/text'
    }),
    alert: {
      get(){
        return this.status
      },
      set(value){
        this.setAlert({
          status: value
        })
      }
    }
  },
  methods: {
    ...mapActions({
      setAlert: 'alert/set'
    }),
    close(){
      this.setAlert({
        status: false
      })
    }
  }
}
</script>

<style scoped>

</style>