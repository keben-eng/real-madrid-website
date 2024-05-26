import {useState} from "react";

function CustomTodo() {
    const [text, setText] = useState('text')
    const [editText, setEditText] = useState(text)
    const [isClicked, setIsClicked] = useState(false)

    const handleDeleting = () => {
        setText('')
    }
    const handleEditing = () => {
        setEditText(text)
        setIsClicked(!isClicked)
    }

    const handleCanceling = () => {
        setIsClicked(false)
    }

    const handleSaving = () => {
        setText(editText)
        setIsClicked(false)
    }

    return (<>
            <div>Custom Todo</div>
            {!isClicked ? <> {
                text && <div> {text}
                    <button onClick={handleEditing}>Edit</button>
                    <button onClick={handleDeleting}>Delete</button>
                </div>
            }
            </> : <div>
                <input value={editText} onChange={(event) => setEditText(event.target.value)} type="text"/>
                <button onClick={handleSaving}>Save</button>
                <button onClick={handleCanceling}>Cancel</button>
            </div>}
        </>
    )
}

export default CustomTodo
