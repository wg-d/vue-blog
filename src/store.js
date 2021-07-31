import Vue from "vue";
import Vuex from "vuex";
import usermodule from "./module/usermodule";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        usermodule,
    }
});

export default store;
