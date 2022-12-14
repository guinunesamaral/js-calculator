import React from "react";
import { Result as ResultInterface } from "../components/interfaces/Result.interface";

export const ResultContext = React.createContext<{
    result: ResultInterface;
    setResult: Function;
}>({
    result: {
        str: "0",
        lastOperation: "",
    },
    setResult: () => {},
});
