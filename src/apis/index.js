import request from "../utils/axios"

export function getOverview (data) {
    return request.get("/voteapi/overview/all", {
        params: data
    })
}