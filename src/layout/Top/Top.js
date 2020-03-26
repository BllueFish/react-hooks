import React, { useState } from "react";
import headIcon from "@/sources/images/common/user-head.svg";

export default function Home() {
    let [userName, setUserName] = useState("Mia");

    return (
        <div className="body-top">
            <div className="user-info">
                <span> Welcome to React Hooks, {userName}</span>
                <img className="user-head-icon" src={headIcon} alt="user-head" />
            </div>
        </div>
    );
}