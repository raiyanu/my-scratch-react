import React from "react";
import { createPortal } from "react-dom";
export default function App() {
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
        </div>
    );
}
