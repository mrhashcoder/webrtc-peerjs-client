import React, { useState, useEffect } from "react";
import RemoteStream from "./remoteSteram";

export default function Live({ myPeerId, myStream, messages, sendMessage, remoteStreams, disconnect }) {
    const [showChat, setShowChat] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);
    const [lastMessageCount, setLastMessageCount] = useState(0);

    useEffect(() => {
        if (!showChat) {
            setUnreadCount(messages.length - lastMessageCount);
        }
    }, [messages]);

    const openChat = () => {
        setShowChat(!showChat);
        setLastMessageCount(messages.length);
        setUnreadCount(0);
    };

    return (
        <div className="live">
            <RemoteStream remoteStreams={remoteStreams} />
        </div>
    );
}
