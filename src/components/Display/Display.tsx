import React, { useContext } from "react";
import { ResultContext } from "../../context/result-context";

const Display = () => {
    const { result } = useContext(ResultContext);

    return (
        <div id="display" className="calculator__display">
            {result.str}
        </div>
    );
};

export default Display;
