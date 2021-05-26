import Vue from 'vue';
import Vuex from 'vuex';

import alert from "./alert";
import dialog from './dialog';
import auth from './auth';

import VuexPersistence from 'vuex-persist'

const vuexPersist = new VuexPersistence({
    key: 'blogApplication',
    storage: localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        alert,
        dialog,
        auth
    },
    plugins: [vuexPersist.plugin]
})