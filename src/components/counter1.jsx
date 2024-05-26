import {useState} from "react";

function Counter1 () {
    const [counter, setCount] = useState(1)

    const [button, setButton] = useState('Hello')

    const [value, setValue] = useState('')

    const [option, setOption] = useState('')

    function selectionTool (event) {
        setOption(event.target.value)
    }



    function handleValue (event) {
        setValue(event.target.value)
    }

    function changeButtonText () {
        if (button === 'Hello') {
            setButton('Goodbye')
        } else  {
            setButton('Hello')
        }
    }
    function decrement () {
        setCount(counter-1)
    }
    function adding () {
        setCount(counter+1)
    }
    return (
        <>
            <button onClick={decrement}>-</button>
            <div>Counter:{counter}</div>
            <button onClick={adding}>+</button>
            <button onClick={changeButtonText}>{button}</button>
            <input value={value} onChange={handleValue}/>
            <p>Name:{value}</p>
            <select value={option} onChange={selectionTool}>
                <option value="Hi">Hi</option>
                <option value="Bye">Bye</option>
                <option value="Bye-bye">Bye-bye</option>
            </select>
            <p>You have chosen:{option}</p>


        </>
    )
}

export default Counter1