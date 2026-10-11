import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h3>Example counter</h3>
            <p>Current value: {count}</p>

            <button onClick={increase}>Sumar +1</button>
            <button onClick={decrease}>Restar -1</button>
        </div>
    );


};