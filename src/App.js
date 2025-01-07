import React, { useActionState, useState } from "react";

export default function App() {

    const [state, formAction, isPending] = useActionState(delayer, null)
    return <form >
        <label htmlFor="Atext">Form Action : {state} </label> <br /><br />
        <input defaultValue={"hey"} type="text" name="Atext" id="Atext" /><br /><br />
        <button formAction={formAction} disabled={isPending}>Trigger</button>
    </form>;
}


function delayer(previousState, formData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(formData); formData.get('Atext')
            console.log(formData.get('Atext'));
            resolve(formData.get('Atext'));
        }, 1000);
    });
}