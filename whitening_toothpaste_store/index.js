
import { useState } from 'react';

export default function Home() {
    const [message, setMessage] = useState('欢迎来到美白牙膏独立站！');

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>{message}</h1>
        </div>
    );
}
