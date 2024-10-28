import React from "react";
import { FunctionComponent, useEffect } from "react";

export const TaskFourComponent = () => {
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Tajmer se ažurira, ali komponenta se ne re-renderira.");
            
        }, 1000); 

        return () => clearInterval(intervalId); 
    }, []); 

    return (
        <div>
            <h1>Tajmer aktivan</h1>
        </div>
    );
}