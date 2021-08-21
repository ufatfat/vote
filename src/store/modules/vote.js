import storage from "@/utils/storage";
const vote = {
    state: {
        voteInfo: storage.getItem("voteInfo"),
    },

    mutations: {
        updateVoteInfo: (state, voteInfo) => {
            let data = {
                name: "voteInfo",
                value: voteInfo,
            }
            storage.setItem(data)
            state.voteInfo = voteInfo
        },
    },

    actions: {
        updateVoteInfo ({ commit }, voteInfo) {
            commit("updateVoteInfo", voteInfo)
        },
    },
}
export default vote