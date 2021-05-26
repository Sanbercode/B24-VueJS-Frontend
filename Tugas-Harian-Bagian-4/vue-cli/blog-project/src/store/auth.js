import axios from 'axios';

export default {
    namespaced: true,
    state: {
        token: {},
        user: {}
    },
    mutations: {
        setToken: (state, payload) => {
            state.token = payload;
        },
        setUser: (state, payload) => {
            state.user = payload;
        }
    },
    actions: {
        setToken: ({commit, dispatch}, payload) => {
            commit('setToken', payload);

            dispatch('setUser', payload);
        },
        setUser: async ({commit}, payload) => {
            let config = {
                method: 'post',
                url: 'http://demo-api-vue.sanbercloud.com/api/v2/auth/me',
                headers: {
                    'Authorization' : 'Bearer ' + payload.access_token
                }
            }
            try {
                const response = await axios(config)
                commit('setUser', response.data);
            } catch (error) {
                commit('setUser', {});
            }
        }
    },
    getters: {
        token: state => state.token,
        user: state => state.user,
        guest: state => Object.keys(state.token).length === 0
    }
}
