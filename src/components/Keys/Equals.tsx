import React, { useContext } from "react";
import { ResultContext } from "../../context/result-context";

const Equals = () => {
    const {
        result: { str },
        setResult,
    } = useContext(ResultContext);

    const calculate = async () => {
        const data = await fetch("http://api.mathjs.org/v4/", {
            method: "POST",
            body: JSON.stringify({
                expr: [str],
                precision: 14,
            }),
        }).then((res) => res.json());
        setResult({ lastOperation: "calculate", str: data.result });
    };

    return (
        <button
            id="equals"
            className="calculator__key calculator__key--equals"
            onClick={calculate}
        >
            =
        </button>
    );
};

export default Equals;
