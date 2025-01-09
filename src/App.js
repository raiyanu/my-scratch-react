import React, { useState, useEffect, memo } from 'react'

export default function App() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(prev => prev + 1);
    }

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div className='prose lg:prose-xl'>
            <div>
                <h1 className=''>You clicked {count} times</h1>
                <button className='btn' onClick={handleClick}>
                    Click me
                </button>
            </div>
            <MyApp />
        </div>
    )
}

export function MyApp() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    return (
        <>
            <label>
                Name{': '}
                <input className='input input-bordered' value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Address{': '}
                <input className='input input-bordered' value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <Greeting name={name} />
        </>
    );
}

const Greeting = memo(function Greeting({ name }) {
    console.log('Greeting was rendered at', new Date().toLocaleTimeString());
    const [greeting, setGreeting] = useState('Hello');
    return (
        <>
            <h3>{greeting}{name && ', '}{name}!</h3>
            <GreetingSelector value={greeting} onChange={setGreeting} />
        </>
    );
});

function GreetingSelector({ value, onChange }) {
    return (
        <>
            <label>
                <input
                    type="radio"
                    checked={value === 'Hello'}
                    onChange={e => onChange('Hello')}
                />
                Regular greeting
            </label>
            <label>
                <input
                    type="radio"
                    checked={value === 'Hello and welcome'}
                    onChange={e => onChange('Hello and welcome')}
                />
                Enthusiastic greeting
            </label>
        </>
    );
}
