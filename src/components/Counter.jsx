import {useState} from "react";

function Counter () {
    const [count, setCount] = useState(1)
    const countDecrease = () => {
        setCount(count-1);
    }
    const countAdd = () => {
        setCount(count+1)
    }
    return (
        <div>
            <button onClick={countDecrease}>-</button>
            <h3>Count: {count}</h3>
            <button onClick={countAdd}>+</button>
        </div>
    )
}

export default Counter