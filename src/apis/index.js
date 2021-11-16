import request from "../utils/axios"

export function getOverview (data) {
    return request.get("/voteapi/overview/all", {
        params: data
    })
}

export function getTotalWorkNum () {
    return request.get("/voteapi/overview/num")
}

export function getWorkInfoByWorkID (data) {
    return request.get("/voteapi/detail/get_one", {
        params: data
    })
}

export function signIn (data) {
    return request.post("/voteapi/auth/sign-in", data)
}

export function rulesRead () {
    return request.put("/voteapi/auth/rules")
}

export function getWorkIDByWorkIdx (data) {
    return request.get("/voteapi/detail/get_idx", {
        params: data
    })
}

export function getRoundInfo () {
    return request.get("/voteapi/auth/current_round")
}

export function getMaxVotesNum (data) {
    return request.get("/voteapi/auth/max_votes_num", {
        params: data
    })
}

export function saveTemp (data) {
    return request.put("/voteapi/vote/save_temp", data)
}

export function submit (data) {
    return request.put("/voteapi/vote/submit", data)
}

export function getVotedWorkInfos (data) {
    return request.get("/voteapi/vote/voted_works", {
        params: data
    })
}

export function changePassword (data) {
    return request.put("/voteapi/auth/change_password", data)
}