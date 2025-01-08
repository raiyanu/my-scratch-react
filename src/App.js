import React, { useContext, useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import { ThemeContext } from "./useTheme";
import Box from "./Box";
import SecuredBox from "./SecuredBox";

export default function App() {
    const UID = useId();
    const { Theme, SwitchTheme } = useContext(ThemeContext);
    const [count, setCount] = useState(0)
    const count2 = useRef(0)
    const securedBoxRef = useRef(null)
    const getTheme = useMemo(() => {
        return ProcessTheme(Theme);
    }, [Theme]) // Memoize the theme! createsTheme on Theme variable value change only\

    const deferedTheme = useDeferredValue(getTheme);
    // const getTheme = ProcessTheme(Theme); // createsTheme on each render

    return (
        <div style={{ ...getTheme, padding: "1rem" }} className="flex items-center justify-center flex-col">
            Theme : {Theme.toUpperCase()} <br />
            <br />
            <br />
            <button className="btn btn-sm btn-secondary" style={{ ...deferedTheme }} onClick={SwitchTheme}>
                switch theme
            </button>
            <button className="btn btn-sm btn-secondary" style={{ ...getTheme }} onClick={() => {
                setCount(preCount => preCount + 1)
            }}>
                {count}
            </button>
            <button className="btn btn-sm btn-secondary" style={{ ...getTheme }} onClick={() => {
                count2.current += 1;
            }}>
                {count2.current}
            </button>
            <h1>Id : <b> {UID}</b> </h1>

            <Box style={{ backgroundColor: 'red' }} />
            <SecuredBox style={{ backgroundColor: 'red' }} ref={securedBoxRef} />
            <button onClick={() => {
                securedBoxRef.current.switchColor()
            }} className="btn btn-sm btn-primary m-3">
                switch color of secured box
            </button>
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
        margin: "20px"
    }
}