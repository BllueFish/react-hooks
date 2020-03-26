import React, { useState } from "react";

export default function Home() {
    let [userName, setUserName] = useState("Mia");

    return (
        <div className="body-top">
            Welcome to React Hooks~，{userName}
        </div>
    );
}