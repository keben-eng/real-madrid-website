import React, {useState} from 'react';

function TodoList() {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])

    function addTask() {
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    function deleteTask(index) {
        let filter = todos.filter((_, i) => i !== index)
        setTodos(filter)
    }

    function editTask(index) {

    }

    return (<>
            <h2>Todo area:</h2>
            <div className="container">
                <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text"/>
                <button onClick={addTask}>ADD</button>
                <ol className="todos">{todos.map((todo, index) => <li>{todo}
                    <div className="editDelete">
                        <button>Edit</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </li>)}</ol>
            </div>
        </>
    )
}

export default TodoList;

// <div className="container">
//     <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text"/>
//     <button onClick={addTask}>ADD</button>
//     <ol className="todos">{todos.map((todo, index) => <li>{todo}
//         <div className="editDelete">
//             <button>Edit</button>
//             <button onClick={() => deleteTask(index)}>Delete</button>
//         </div>
//     </li>)}</ol>
// </div>
