import React, { useContext } from "react";
import { ResultContext } from "../../context/result-context";

const Clear = () => {
    const { result, setResult } = useContext(ResultContext);

    const clearDisplay = () => {
        setResult({ ...result, str: "0" });
    };

    return (
        <button
            id="clear"
            className="calculator__key calculator__key--clear"
            onClick={clearDisplay}
        >
            AC
        </button>
    );
};

export default Clear;
