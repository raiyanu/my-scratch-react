import React, { useContext, useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import { ThemeContext } from "./useTheme";

export default function App() {
    const UID = useId();
    console.log(UID)
    const { Theme, SwitchTheme } = useContext(ThemeContext);
    const [count, setCount] = useState(0)
    const count2 = useRef(0)
    const getTheme = useMemo(() => {
        return ProcessTheme(Theme);
    }, [Theme]) // Memoize the theme! createsTheme on Theme variable value change only\

    const deferedTheme = useDeferredValue(getTheme);
    // const getTheme = ProcessTheme(Theme); // createsTheme on each render

    return (
        <div style={{ ...getTheme, padding: "1rem" }}>
            hey there {Theme.toUpperCase()} <br />
            <br />
            <br />
            <button style={{ ...deferedTheme, padding: "1rem 2rem", }} onClick={SwitchTheme}>
                switch theme
            </button>
            <button style={{ ...getTheme, padding: "1rem 2rem", margin: "10px" }} onClick={() => {
                setCount(preCount => preCount + 1)
            }}>
                {count}
            </button>
            <button style={{ ...getTheme, padding: "1rem 2rem" }} onClick={() => {
                count2.current += 1;
            }}>
                {count2.current}
            </button>
            <h1>Id : <b> {UID}</b> </h1>
        </div>
    );
}
function ProcessTheme(Theme) {
    console.log("processing Theme...");
    console.log(Theme);
    return {
        backgroundColor: `${Theme === "dark" ? "black" : "white"}`,
        color: `${Theme === "dark" ? "white" : "black"}`,
        border: `1px solid ${Theme === "dark" ? "white" : "black"}`,
    }
}