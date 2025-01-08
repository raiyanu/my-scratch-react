import React, { useContext } from "react";
import { useOptimistic, useState, useRef } from "react";

function Thread({ messages, sendMessage }) {
    const formRef = useRef();
    async function formAction(formData) {
        addOptimisticMessage(formData.get("message"));
        await sendMessage(formData);
    }
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [

            {
                text: newMessage,
                sending: true
            }, ...state
        ]
    );

    return (
        <div className="p-4">
            <form action={formAction} ref={formRef} className="mb-3">
                <input type="text" name="message" placeholder="Hello!" className="input input-sm border border-primary-800" />
                <button type="submit" className="btn btn-sm ml-3">Send</button>
            </form> {optimisticMessages.map((message, index) => (
                <div key={index} className="mb-1">
                    {message.text}
                    {!!message.sending && <small> (Sending...)</small>}
                </div>
            ))}

        </div>
    );
}

export default function App() {
    const [messages, setMessages] = useState([
        { text: "Hello there!", sending: false, key: 1 }
    ]);
    async function sendMessage(formData) {
        const sentMessage = await deliverMessage(formData.get("message"));
        setMessages((messages) => [{ text: sentMessage }, ...messages]);
    }
    return <Thread messages={messages} sendMessage={sendMessage} />;
}

export async function deliverMessage(message) {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
}
