import Peer from "peerjs";

var PEER_SERVER = "peerjs-server-m97h.onrender.com";
var PORT = 443;
let peerConnectionObject = null;
const logTag = "webrtc";

export class PeerConnection {
    #peerInstance = null;
    #connectionInstance = null;
    #connectedPeers = {};

    static isConnectedToPeerServer = false;
    static isConnectedToPeerClient = false;
    constructor() {
        if (peerConnectionObject) {
            console.log("peer instance already created");
        }

        peerConnectionObject = this;
        this.peerId = "ballie-tv1";
        this.toConnectPeerId = "ballie-tv2";
        this.#createWebRTC();
        this.setPeerCallbacks.bind(this);
        this.createClientPeerConnection.bind(this);
    }

    #createWebRTC() {
        console.log("webrtc init peer : +" + this.peerId);
        const peer = new Peer(this.peerId, {
            host: PEER_SERVER,
            port: PORT,
            path: "/",
            secure: true,
        });

        console.log("webrtc peer instance created: " + peer);
        this.setPeerCallbacks(peer);
        this.#peerInstance = peer;
        console.log("Peer Instnace : " + this.#peerInstance);
    }

    setupPeerCallbacks() {
        this.#peerInstance.on("open", (id) => {
            console.log("webrtc Peer Connected With Id : " + id);
            PeerConnection.isConnectedToPeerServer = true;
        });

        this.#peerInstance.on("connection", (conn) => {
            console.log("webrtc Got Hit By connection Requestion : ");
            console.log(conn);
            this.#connectionInstance = conn;
            PeerConnection.isConnectedToPeerClient = true;
        });
    }

    handleConnection() {
        console.log(c);
        if (c.label === "chat") {
            c.on("data", function (data) {
                console.log(c.peer + " : " + data);
                myapp.appendHistory(c.peer, data);
            });

            c.on("close", function () {
                delete this.#connectedPeers[c.peer];
                console.log("Close Event : delete client");
            });

            this.#connectedPeers[c.peer] = c;
        } else {
            console.log(c.label);
        }
    }

    connectToAnotherClient(id) {
        if (!id || this.#peerInstance.disconnected) return;
        var requestedPeer = id;
        if (!this.#connectedPeers[requestedPeer]) {
            // Create 2 connections, one labelled chat and another labelled file.
            var c = this.#peerInstance.connect(requestedPeer, {
                label: "chat",
                serialization: "none",
                metadata: { message: "hi i want to chat with you!" },
            });
            c.on("open", function () {
                connect(c);
            });
            c.on("error", function (err) {
                alert(err);
            });
        }
    }

    setPeerCallbacks(peer) {
        peer.on("open", function (id) {
            console.log("My peer ID is: " + id);
            console.log(new Date());
            PeerConnection.isConnectedToPeerServer = true;
        });

        peer.on("connection", this.handleConnection);

        peer.on("call", function (call) {
            console.log("Receiving a call");
            console.log(call);
        });

        peer.on("close", function (conn) {
            // New connection requests from users
            console.log("Peer connection closed");
        });

        peer.on("disconnected", function (conn) {
            console.log("Peer connection disconnected : " + conn);
            console.log(new Date());
            // if (conn != ) {
            //     return;
            // }
            // setTimeout(function () {
            //     this.#createWebRTC();
            // }, 5000);

            // peer.reconnect()
        });

        peer.on("error", function (err) {
            console.log(new Date());
            console.log("Peer connection error:");
            console.log(err);
            if ("unavailable-id" == err.type) {
                console.log("Inavailabe ID Error");
            } else if ("peer-unavailable" == err.type) {
                console.log("Error at peer on error");
            }
        });
    }

    createClientPeerConnection(peerid) {
        console.log(this);

        console.log("Peer Instnace : " + this.#peerInstance);
        if (PeerConnection.isConnectedToPeerServer) {
            if (this.#peerInstance.disconnected) return;
            // var requestedPeer = this.toConnectPeerId;
            var requestedPee = peerid;
            if (!this.#connectedPeers[requestedPeer]) {
                // Create 2 connections, one labelled chat and another labelled file.
                var c = this.#peerInstance.connect(requestedPeer, {
                    label: "chat",
                    serialization: "none",
                    metadata: { message: "hi i want to chat with you!" },
                });
                c.on("open", function () {
                    handleConnection(c);
                });
                c.on("error", function (err) {
                    alert(err);
                });
            }
        } else {
            console.log("webrtc Server Connection : disconnected");
        }
    }

    registerEvent(event, action) {
        this.#peerInstance.on(event, action);
    }

    sendMessage(message) {
        console.log("webrtc" + message);
        if (PeerConnection.isConnectedToPeerServer && PeerConnection.isConnectedToPeerClient) {
            this.#connectionInstance.send(message);
        }
    }

    recieveMessage(callback) {
        this.#connectionInstance.on("data", (connectionData) => {
            callback(connectionData);
        });
    }
}

const singletoPeerConnection = Object.freeze(new PeerConnection());

export default singletoPeerConnection;
