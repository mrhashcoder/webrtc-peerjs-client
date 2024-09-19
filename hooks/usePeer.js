import React, { useState, useEffect } from "react";
import Peer from "peerjs";
import useUserMedia from "./useUserMedia";

const audioOnlyConfig = { audio: true, video: false };
const userMediaConfig = {
    audio: { echoCancellation: true, noiseSuppression: true },
    video: { facingMode: "user" },
};

const config = { iceServers: [{ urls: ["stun:stun.l.google.com:19302"] }] };

var PEER_SERVER = "peerjs-server-m97h.onrender.com";
var PORT = 443;

const localConfig = {
    host: PEER_SERVER,
    secure: true,
    port: PORT,
    path: "/",
    config,
    debug: 0, // from 0 up to 3
};

export default function usePeer(addRemoteStream, removeRemoteStream, peerId, toConnectId) {
    const [myPeer, setPeer] = useState(null);
    const [myPeerID, setMyPeerID] = useState(peerId);
    const [toConnectPeerId, setToConnectPeerId] = useState(toConnectId);
    const [isMobileDeviceReady, setIsMobileDeviceReady] = useState(false);
    const localstream = useUserMedia();

    const cleanUp = () => {
        // if (myPeer) {
        //     myPeer.disconnect();
        //     myPeer.destroy();
        // }
        // setPeer(null);
        // setMyPeerID(null);
    };

    function makeConnection() {
        var c = myPeer.connect(toConnectPeerId, {
            label: "chat",
            serialization: "raw",
            metadata: { message: "This is A Chat Request" },
        });
    }

    function excuteCall() {
        let call = myPeer.call(toConnectPeerId, localstream);

        call.on("stream", (remoteStream) => {
            addRemoteStream(remoteStream, call.peer);
            console.log("Connected to " + call.peer);
        });

        call.on("close", () => {
            console.log("call closed");
            removeRemoteStream(call.peer);
            call.close();
        });

        call.on("error", (error) => {
            console.log("call error", error);
            removeRemoteStream(call.peer);
            call.close();
        });
    }

    useEffect(() => {
        const peer = new Peer(myPeerID, localConfig);

        peer.on("open", () => {
            console.log("Connected To Server");
            setPeer(peer);
        });

        peer.on("connection", (data) => {
            console.log("Peer Made Connection");
            console.log(data);
            if (data.label === "chat") {
                setIsMobileDeviceReady(true);
            }
        });

        peer.on("call", (call) => {
            console.log("receiving call from " + call.peer);

            navigator.mediaDevices
                .getUserMedia(userMediaConfig)
                .then((stream) => {
                    // Answer the call with an A/V stream.
                    call.answer(stream);

                    // Play the remote stream
                    call.on("stream", (remoteStream) => {
                        addRemoteStream(remoteStream, call.peer);
                    });

                    call.on("close", () => {
                        console.log("The call has ended");
                        removeRemoteStream(call.peer);
                    });

                    call.on("error", (error) => {
                        console.log(error);
                        removeRemoteStream(call.peer);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        });

        peer.on("disconnected", () => {
            console.log("Peer desconnected");
            cleanUp();
        });

        peer.on("close", () => {
            console.log("Peer closed remotetly");
            cleanUp();
        });

        peer.on("error", (error) => {
            console.log("peer error", error);
            cleanUp();
        });

        return () => {
            cleanUp();
        };
    }, [myPeerID, toConnectPeerId]);

    return {
        myPeer,
        myPeerID,
        toConnectPeerId,
        excuteCall,
        isMobileDeviceReady,
        makeConnection,
        setMyPeerID,
        setToConnectPeerId,
    };
}
