import { useMemo, useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import { ResultContext } from "./context/result-context";
import "./App.css";

function App() {
    const [result, setResult] = useState({
        str: "0",
        lastOperation: "",
    });

    const value = useMemo(() => ({ result, setResult }), [result]);

    return (
        <div className="App">
            <ResultContext.Provider value={value}>
                <Calculator />
            </ResultContext.Provider>
        </div>
    );
}

export default App;
