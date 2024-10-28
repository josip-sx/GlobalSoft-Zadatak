import React from "react";
import { useEffect, FunctionComponent } from "react";

export const TaskOneComponent: FunctionComponent = () => {

    useEffect(() => {
        console.log("Komponenta je se učitala");
    }, /*Dependency nije obavezan zbog svakog rendera komponente*/);

    return(
        <>

        </>
    );

}