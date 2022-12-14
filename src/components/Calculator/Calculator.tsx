import React from "react";
import Display from "../Display/Display";
import Clear from "../Keys/Clear";
import Dot from "../Keys/Dot";
import Equals from "../Keys/Equals";
import Number from "../Keys/Number";
import Operator from "../Keys/Operator";
import "./Calculator.css";

const Calculator = () => {
    return (
        <div className="calculator">
            <Display />
            <Clear />
            <Operator op="/" />
            <Operator op="x" />
            <Number value={7} />
            <Number value={8} />
            <Number value={9} />
            <Operator op="-" />
            <Number value={4} />
            <Number value={5} />
            <Number value={6} />
            <Operator op="+" />
            <Number value={1} />
            <Number value={2} />
            <Number value={3} />
            <Equals />
            <Number value={0} />
            <Dot />
        </div>
    );
};

export default Calculator;
