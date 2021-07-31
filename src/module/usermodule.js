import axios from 'axios';

const state={
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    user: ''
}


const mutations = {
    login_request(state){
        state.status = 'loading'
    },
    login_success(state, data){
        
    state.status = "success"
    state.token = data.token
    state.user = data.user
    },
    login_error(state){
    state.status = 'error'
    },
    logout(state){
    state.status = ''
    state.token = ''
    },
}

const actions = {
    login({commit}, user_valid){
        return new Promise((resolve, reject) => {
            commit('login_request')
            let uri = '//localhost:4000/users/login';
            axios.post(uri, user_valid)
            .then(res => {
                const token = res.data.token
                const user = res.data.email
                const success = res.data.success
                if (success) {
                    localStorage.setItem('token', token)
                    commit('login_success', { token , user })
                }
                resolve(res)
            })
            .catch(err => {
                commit('login_error')
                localStorage.removeItem('token')
                reject(err)
            })
        })
    },
    signup({commit},user){
        return new Promise((resolve, reject) => {
            commit('login_request')
            let uri = '//localhost:4000/users/sign/add';
            axios.post(uri, user)
            .then(res => {
                // Add the following line:
                resolve(res)
            })
            .catch(err => {
                commit('login_error', err)
                localStorage.removeItem('token')
                reject(err)
            })
        })
    },
    logout({commit}){
        return new Promise((resolve) => {
            commit('logout')
            localStorage.removeItem('token')
            resolve()
        })
    }
    
}

const usersModule = {
    state,
    mutations,
    actions
  };
  
  export default usersModule;
  