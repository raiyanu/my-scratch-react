import React, { useTransition, useState, useEffect, act } from 'react'
import Todo from './Todo';
import Box from './Box';

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
        </div>
    )
}
