import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters";
import user from "./modules/user"
import vote from "./modules/vote"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        vote,
    },
    getters
})

export default store