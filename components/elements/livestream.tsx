// @ts-nocheck
"use client";

import React, { useEffect, useState, useRef } from "react";
import Peer from "peerjs";
import singletoPeerConnection, { PeerConnection } from "@/lib/peerConnection";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function LiveStream() {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        singletoPeerConnection.createClientPeerConnection(inputValue);
    };

    const [status, setStatus] = useState({
        clientStatus: "Not Connected",
        serverStatus: "Not Connected",
    });

    const handleRefresh = () => {
        setStatus({
            clientStatus: PeerConnection.isConnectedToPeerClient ? "Connected" : "Not Connected",
            serverStatus: PeerConnection.isConnectedToPeerServer ? "Connected" : "Not Connected",
        });
    };

    return (
        <div className="p-8 flex flex-col items-center justify-between">
            <div className="m-12 flex flex-col justify-between items-center">
                <div className="text-2xl text-bold">Server Status : {status.serverStatus}</div>

                <div className="text-2xl text-bold">Client Status : {status.clientStatus} </div>

                <button className={`mt-8 w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`} onClick={handleRefresh}>
                    Refresh
                </button>
            </div>

            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <input
                    className="border-black border-2 m-4"
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <button className={`w-[14rem] ${cn(buttonVariants({ size: "lg" }))}`} type="submit">
                    Send Connection Request
                </button>
            </form>

            <div>Live Stream</div>
        </div>
    );
}

export default LiveStream;
