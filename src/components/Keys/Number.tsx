import React, { FC, useContext } from "react";
import { ResultContext } from "../../context/result-context";

interface NumberProps {
    value: number;
}

const Number: FC<NumberProps> = (props) => {
    const {
        result: { str, lastOperation },
        setResult,
    } = useContext(ResultContext);
    const { value } = { ...props };

    const addNumber = () => {
        if (lastOperation === "calculate") {
            setResult({
                lastOperation: "addNumber",
                str: value,
            });
        }
        if (str.length < 21) {
            if (str.length === 1 && str[0] === "0") {
                setResult({
                    lastOperation: "addNumber",
                    str: str.substring(1, str.length) + value,
                });
            } else {
                setResult({
                    lastOperation: "addNumber",
                    str: str + value,
                });
            }
        }
    };

    return (
        <button
            id={convertToSpelling(value)}
            className={
                value === 0
                    ? "calculator__key calculator__key--number calculator__key--number-zero"
                    : "calculator__key calculator__key--number "
            }
            onClick={addNumber}
        >
            {value}
        </button>
    );
};

const convertToSpelling = (n: number): string => {
    switch (n) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        default:
            return "";
    }
};

export default Number;
