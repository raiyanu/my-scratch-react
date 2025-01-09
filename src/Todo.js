import React, { Profiler, useReducer, useSyncExternalStore } from "react";
import userOnlineStatus from "./userOnlineStatus";

function reducer(STATE, ACTION) {
    switch (ACTION.type) {
        case "ADD":
            return [ACTION.payload, ...STATE];
        default:
            return STATE;
    }
}
const initialTodoState = [];

const createInitialTodoState = (initialTodoState) => {
    return initialTodoState;
};

export default function Todo() {
    const [state, dispatch] = useReducer(
        reducer,
        initialTodoState,
        createInitialTodoState
    );
    function formAction(formData) {
        if (formData.get("todoInput"))
            dispatch({ type: "ADD", payload: formData.get("todoInput") });
    }
    const isOnline = useSyncExternalStore(
        userOnlineStatus.subscribe,
        userOnlineStatus.getSnapShot
    );
    function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
        console.log("id: ", id);
        console.log("phase: ", phase);
        console.log("actualDuration: ", actualDuration);
        console.log("baseDuration: ", baseDuration);
        console.log("startTime: ", startTime);
        console.log("commitTime: ", commitTime);
    }

    return (
        <Profiler id="main" onRender={onRender}>
            <div>
                {isOnline ? <h1>You are online</h1> : <h1>You are Offline</h1>}
                <h1>TODO</h1>
                <form action={formAction}>
                    <input
                        type="text"
                        name="todoInput"
                        className="input input-sm input-bordered w-full max-w-xs"
                    />
                    <input
                        type="submit"
                        value="Add"
                        className="btn btn-sm btn-bordered  max-w-xs ml-2"
                    />
                </form>
                {false && <h1>Loading</h1>}
                <ul className="p-4">
                    {state.map((todoItem, todoKey) => {
                        return (
                            <li
                                className="hover:bg-base-200 px-3 py-2 rounded"
                                key={todoKey + todoItem}
                            >
                                {todoItem}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Profiler>
    );
}
