export default {
    ws: {},
    setWebsocket: function(newWs) {
        this.ws = newWs
        this.ws.onopen = () => {
            console.log("WebSocket: Connection established.")
        }
        this.ws.onclose = () => {
            console.log("WebSocket: Disconnected from server.")
        }
        this.ws.onmessage = (e) => {
            let data = JSON.parse(e.data)
            this.handleMessage(data)
        }
    },
    handleMessage: () => {

    },
    handleVotes: () => {

    },
    handleRevoteStatus: () => {

    },
    handleVoted: () => {

    },
}