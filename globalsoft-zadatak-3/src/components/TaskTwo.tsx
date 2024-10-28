import React from "react";
import { useState, useEffect, FunctionComponent } from "react";

export const TaskTwoComponent: FunctionComponent = () => {
    const [click, setClick] = useState(false);

    useEffect(() => {
        console.log("User je kliknuo na button i triggerovao re-render.")
    }, [click]);

    return(
        <div>
            <button onClick={() => setClick(!click)}>Click</button>
        </div>
    );
}