import storage from "@/utils/storage";
const vote = {
    state: {
        voteInfo: storage.getItem("voteInfo"),
        votedWorks: storage.getItem("votedWorks"),
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
        updateVotedWorks: (state, votedWorks) => {
            let data = {
                name: "votedWorks",
                value: votedWorks,
            }
            storage.setItem(data)
            state.votedWorks = votedWorks
        },
    },

    actions: {
        updateVoteInfo ({ commit }, voteInfo) {
            commit("updateVoteInfo", voteInfo)
        },
        updateVotedWorks ({ commit }, votedWorks) {
            commit("updateVotedWorks", votedWorks)
        },
    },
}
export default vote