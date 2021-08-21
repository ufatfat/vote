const getters = {
    token: state => state.user.token,
    userInfo: state => state.user.userInfo,
    voteInfo: state => state.vote.voteInfo,
}
export default getters