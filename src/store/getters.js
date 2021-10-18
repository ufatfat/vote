const getters = {
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
    voteInfo: state => state.vote.voteInfo,
    votedWorks: state => state.vote.votedWorks,
    windowWidth: state => state.general.windowWidth,
    windowHeight: state => state.general.windowHeight,
    contestConfig: state => state.general.contestConfig,
}
export default getters