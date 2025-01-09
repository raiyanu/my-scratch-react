import React, { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./useTheme";
import "./index.css";
const App = lazy(() => import("./App"))


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
)
