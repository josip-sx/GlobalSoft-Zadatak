import React from "react";
import { FunctionComponent, useState, useEffect } from "react";

export const TaskThreeComponent: FunctionComponent = () => {
    const[click, setClick] = useState(false);
    useEffect(() => {
        console.log("User je kliknuo button koji prati stanje clicka i uzrokovao re-render komponente.");
        document.title = click ? "Naslov za true vrijednost" : "Naslov za false vrijednost"
    }, [click])
    return(
        <div>
            <button onClick={() => setClick(!click)}>Click</button>
        </div>
    );
}