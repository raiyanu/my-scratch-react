import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./useTheme";
import App from "./App";
const root = createRoot(document.getElementById("root"));
<<<<<<< HEAD
import "./index.css";
=======
import './index.css'
>>>>>>> hooks

root.render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
);
