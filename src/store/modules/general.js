import storage from "@/utils/storage";
const general = {
    state: {
        windowWidth: storage.getItem("windowWidth"),
        windowHeight: storage.getItem("windowHeight"),
        contestConfig: storage.getItem("contestConfig"),
        maxIndex: storage.getItem("maxIndex"),
        currentIndex: storage.getItem("currentIndex"),
        revote: storage.getItem("revote"),
        revoteWorks: storage.getItem("revoteWorks"),
        revoteVotedWorks: storage.getItem("revoteVotedWorks"),
    },

    mutations: {
        updateWindowWidth: (state, windowWidth) => {
            let data = {
                name: "windowWidth",
                value: windowWidth,
            }
            storage.setItem(data)
            state.windowWidth = windowWidth
        },
        updateWindowHeight: (state, windowHeight) => {
            let data = {
                name: "windowHeight",
                value: windowHeight,
            }
            storage.setItem(data)
            state.windowHeight = windowHeight
        },
        updateContestConfig: (state, contestConfig) => {
            let data = {
                name: "contestConfig",
                value: contestConfig,
            }
            storage.setItem(data)
            state.contestConfig = contestConfig
        },
        updateMaxIndex: (state, maxIndex) => {
            let data = {
                name: "maxIndex",
                value: maxIndex
            }
            storage.setItem(data)
            state.maxIndex = maxIndex
        },
        updateCurrentIndex: (state, currentIndex) => {
            let data = {
                name: "currentIndex",
                value: currentIndex
            }
            storage.setItem(data)
            state.currentIndex = currentIndex
        },
        updateRevote: (state, revote) => {
            let data = {
                name: "revote",
                value: revote
            }
            storage.setItem(data)
            state.revote = revote
        },
        updateRevoteWorks: (state, revoteWorks) => {
            let data = {
                name: "revoteWorks",
                value: revoteWorks
            }
            storage.setItem(data)
            state.revoteWorks = revoteWorks
        },
        updateRevoteVotedWorks: (state, revoteVotedWorks) => {
            let data = {
                name: "revoteVotedWorks",
                value: revoteVotedWorks,
            }
            storage.setItem(data)
            state.revoteVotedWorks = revoteVotedWorks
        }
    },

    actions: {
        updateWindowWidth ({ commit }, windowWidth) {
            commit("updateWindowWidth", windowWidth)
        },
        updateWindowHeight ({ commit }, windowHeight) {
            commit("updateWindowHeight", windowHeight)
        },
        updateContestConfig ({ commit }, contestConfig) {
            commit("updateContestConfig", contestConfig)
        },
        updateMaxIndex ({ commit }, maxIndex) {
            commit("updateMaxIndex", maxIndex)
        },
        updateCurrentIndex ({ commit }, currentIndex) {
            commit("updateMaxIndex", currentIndex)
        },
        updateRevote ({ commit }, revote) {
            commit("updateRevote", revote)
        },
        updateRevoteWorks({ commit }, revoteWorks) {
            commit("updateRevoteWorks", revoteWorks)
        },
        updateRevoteVotedWorks({ commit }, revoteVotedWorks) {
            commit("updateRevoteVotedWorks", revoteVotedWorks)
        }
    },
}
export default general