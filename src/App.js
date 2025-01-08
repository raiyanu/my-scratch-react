import React, { useTransition } from 'react'
import Todo from './Todo';
import Box from './Box';

export default function App() {
    const [isPending, startTransition] = useTransition();
    return (
        <div className='p-4'>
            <Todo />
            {!isPending && <Box />}
            <button onClick={() => {
                startTransition(async () => {
                    await alert('Hey');
                    return;
                });
            }} className='btn btn-sm'> Click </button>
        </div>
    )
}
