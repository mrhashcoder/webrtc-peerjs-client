// @ts-nocheck
"use client";

import React, { useEffect, useState, useRef } from "react";
import Peer from "peerjs";
import useRemoteStreams from "@/hooks/useRemoteStream";
import usePeer from "@/hooks/usePeer";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Live from "./livePage";

function LiveStream() {
    const [inputValue, setInputValue] = useState("");
    const [remoteStreams, addRemoteStream, removeRemoteStream] = useRemoteStreams();
    const [selfPeerId, setSelfPeerId] = useState("ballie-1");
    const [toConnectPeerId, setToConnectPeerId] = useState("ballie-3");

    const [myPeer, myPeerID, excuteCall, isMobileDeviceReady, makeConnection] = usePeer(
        addRemoteStream,
        removeRemoteStream,
        selfPeerId,
        toConnectPeerId
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        makeConnection();
    };

    useEffect(() => {
        if (isMobileDeviceReady) {
            excuteCall();
        }
    }, [isMobileDeviceReady]);

    // const [status, setStatus] = useState({
    //     clientStatus: "Not Connected",
    //     serverStatus: "Not Connected",
    // });

    return (
        <div className="p-8 flex flex-col items-center justify-between">
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <div cka>
                    <label>Self Id :</label>
                    <input
                        className="border-black border-2 m-4"
                        type="text"
                        onChange={(e) => setSelfPeerId(e.target.value)}
                        value={selfPeerId}
                    />
                </div>
                <div>
                    <label>Another Device Id :</label>
                    <input
                        className="border-black border-2 m-4"
                        type="text"
                        onChange={(e) => setToConnectPeerId(e.target.value)}
                        value={toConnectPeerId}
                    />
                </div>
                <button className={`w-[14rem] ${cn(buttonVariants({ size: "lg" }))}`} type="submit">
                    Send Connection Request
                </button>
            </form>

            <div>Live Stream</div>
            <div>
                <Live disconnect={null} messages={[]} myPeerId={myPeerID} remoteStreams={remoteStreams} />
            </div>
        </div>
    );
}

export default LiveStream;
