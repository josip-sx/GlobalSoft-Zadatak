import React from "react";
import { FunctionComponent, useEffect, useRef } from "react";

export const TaskFiveComponent = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Unesite nešto..." />
            <button onClick={handleClick}>Fokusiraj na input</button>
        </div>
    );
}