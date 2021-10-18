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
        updateVotesWorks: (state, votedWorks) => {
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
        updateVotesWorks ({ commit }, votedWorks) {
            commit("updateVotesWorks", votedWorks)
        },
    },
}
export default vote