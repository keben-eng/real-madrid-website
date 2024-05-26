import {useEffect, useState} from "react";

function Counter (props) {

    const [count, setCount] = useState(0)

    useEffect(() => {
        if(props.resetCounter) {
            setCount(0)
        }
    }, [props.resetCounter])

    useEffect(() => {
        if (count % 10 === 0 && count !== 0) {
            alert('Hello')
        }
    }, [count]);
    const countDecrease = () => {
        setCount(count-1);
    }
    const countAdd = () => {
        setCount(count+1)
    }

    const handleResetting = () => {
        setCount(0)
    }

    return (
        <div>
            <button onClick={countDecrease}>-</button>
            <h3> {props.teamName}: Count: {count}</h3>
            <button onClick={countAdd}>+</button>
            <button onClick={handleResetting}>Reset</button>
        </div>

    )
}

export default Counter