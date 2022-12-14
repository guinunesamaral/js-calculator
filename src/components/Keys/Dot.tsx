import React, { useContext } from "react";
import { ResultContext } from "../../context/result-context";

const Dot = () => {
    const {
        result: { str },
        setResult,
    } = useContext(ResultContext);

    const addDot = () => {
        if (str.length < 21) {
            if (Number.isInteger(parseInt(str[str.length - 1]))) {
                setResult({ lastOperation: "addDot", str: str + "." });
            }
        }
    };

    return (
        <div
            id="decimal"
            className="calculator__key calculator__key--dot"
            onClick={addDot}
        >
            .
        </div>
    );
};

export default Dot;
