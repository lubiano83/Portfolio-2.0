/* useMostrar */

import { useState } from "react";

export const useMostrar = () => {

    const [mostrar, setMostrar] = useState(true);
    const [mostrar1, setMostrar1] = useState(true);
    const [mostrar2, setMostrar2] = useState(true);


    const handleMostrar = () => {
        setMostrar(!mostrar);
    };

    const handleMostrar1 = () => {
        setMostrar1(!mostrar1);
    };

    const handleMostrar2 = () => {
        setMostrar2(!mostrar2);
    };

    return {handleMostrar, mostrar, handleMostrar1, mostrar1, mostrar2, handleMostrar2}
};

