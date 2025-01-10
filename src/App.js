import React from "react";
import { createPortal, preconnect, preinit, preinitModule, preload, preloadModule } from "react-dom";
export default function App() {
    preload('/settings.svg')
    preconnect("/");
    preinit("/style.css", { as: "style" });
    preinit("/test.js", { as: "script" });
    preinitModule("/test.es.js", { as: "script" });
    preloadModule("/test.load.js", { as: "script" });
    return (
        <div className="prose lg:prose-xl">
            <h1>Helllo there from Parents</h1>
            <div>
                {createPortal(
                    <h1>
                        Hey there!, From another already exisiting <b>DOM Element.</b>
                    </h1>,
                    document.getElementById("secondRoot")
                )}
            </div>
            <img src="settings.svg" />
        </div>
    );
}
