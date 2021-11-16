const getters = {
    userInfo: state => state.user.userInfo,
    voteInfo: state => state.vote.voteInfo,
    votedWorks: state => state.vote.votedWorks,
    windowWidth: state => state.general.windowWidth,
    windowHeight: state => state.general.windowHeight,
    revote: state => state.general.revote,
    revoteWorks: state => state.general.revoteWorks,
    revoteVotedWorks: state => state.general.revoteVotedWorks,
    contestConfig: state => state.general.contestConfig,
    maxIndex: state => state.general.maxIndex,
    currentIndex: state => state.general.currentIndex,
    totalWorkNum: state => state.general.totalWorkNum,
}
export default getters