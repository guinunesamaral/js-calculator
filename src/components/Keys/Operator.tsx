import React, { FC, useContext } from "react";
import { ResultContext } from "../../context/result-context";

interface OperatorProps {
    op: string;
}

const Operator: FC<OperatorProps> = (props) => {
    const {
        result: { str },
        setResult,
    } = useContext(ResultContext);
    const operators = ["+", "-", "x", "/"];
    const { op } = { ...props };

    const addOperator = () => {
        if (str.length < 21) {
            if (!operators.includes(str[str.length - 1])) {
                setResult({ lastOperation: "addOperator", str: str + op });
            }
        }
    };

    return (
        <button
            id={convertToOperationName(op)}
            className="calculator__key"
            onClick={addOperator}
        >
            {op}
        </button>
    );
};

const convertToOperationName = (s: string): string => {
    switch (s) {
        case "+":
            return "add";
        case "-":
            return "subtract";
        case "x":
            return "multiply";
        case "/":
            return "divide";
        default:
            return "";
    }
};

export default Operator;
