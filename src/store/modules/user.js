import storage from "@/utils/storage";
const expires = 24 * 3600 * 1000
const user = {
    state: {
        token: storage.getItem("token"),
        userInfo: storage.getItem("userInfo")
    },

    mutations: {
        updateToken: (state, token) => {
            let data = {
                name: "token",
                value: token,
                expires: expires,
            }
            storage.setItem(data)
            state.token = token
        },
        updateUserInfo: (state, userInfo) => {
            let data = {
                name: "userInfo",
                value: userInfo,
                expires: expires,
            }
            storage.setItem(data)
            state.userInfo = userInfo
        },
        signOut: state => {
            storage.removeItem("token"), storage.removeItem("userInfo")
            state.token = null, state.userInfo = null
        }
    },

    actions: {
        updateToken ({ commit }, token) {
            commit("updateToken", token)
        },
        updateUserInfo ({ commit }, userInfo) {
            commit("updateUserInfo", userInfo)
        },
        signOut ({ commit }) {
            commit("signOut")
        }
    },
}
export default user