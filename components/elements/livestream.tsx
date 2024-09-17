// @ts-nocheck
"use client";

import React, { useEffect, useState, useRef } from "react";
import Peer from "peerjs";

var PEER_SERVER = "peerjs-server-m97h.onrender.com";
var PORT = 443;

function LiveStream() {
    const [peerId, setPeerId] = useState("ballie-tv");
    const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setPeerId(inputValue);
    };

    useEffect(() => {
        const peer = new Peer(peerId, {
            host: PEER_SERVER,
            port: PORT,
            path: "/",
            secure: true,
        });

        peer.on("open", (id) => {
            console.log("Connection Made : " + id);
        });

        peerInstance.current = peer;
    }, [peerId]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <button type="submit">Submit</button>
            </form>
            <div>Live Stream</div>
        </>
    );
}

export default LiveStream;
