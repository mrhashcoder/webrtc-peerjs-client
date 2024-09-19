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
            <div className="header-live">
                <div className="logo-live">
                    <img src="/static/images/democracy-earth.png" />
                </div>
                <div className="stream-logo">
                    <img src="/static/images/live-stream.png" />
                </div>
            </div>ß
            <RemoteStream remoteStreams={remoteStreams} />
            {/* {showChat && (
                <Chatß¯
                    myPeerId={myPeerId}
                    messages={messages}
                    sendMessage={sendMessage}
                    close={() => setShowChat(false)}
                />
            )} */}
            <div className="footer">
                <div className="button-show-chat">
                    <span className="chat-messeger-count">{unreadCount > 0 ? unreadCount : ""}</span>
                </div>
            </div>
        </div>
    );
}
