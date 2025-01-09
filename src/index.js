import React, { StrictMode, act } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./useTheme";
import App from "./App";
import "./index.css";

// To describe : execution is in testing ACT-MODE
global.IS_REACT_ACT_ENVIRONMENT = true;

const container = document.getElementById("root");

await act(() => {
    createRoot(container).render(
        <StrictMode>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StrictMode>
    )
});

const button = container.querySelector('button');

if (document.title === 'You clicked 0 times') {
    console.log("success")
} else {
    console.log("Failed")
}
