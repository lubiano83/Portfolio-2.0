/* useMostrar */

import { useState } from "react";

export const useMostrar = () => {

    const [mostrar, setMostrar] = useState(false);
    const [show, setShow] = useState(false);

    const handleMostrar = () => {
        setMostrar(!mostrar);
    };

    const handleShow = () => {
        setShow(!show);
    };

    return {handleMostrar, mostrar, handleShow, show}
};

