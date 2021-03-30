import React, { useState } from 'react'

const AddTodo = (props) => {
    const [input, setInput] = useState('')
    function addToList() {
        props.addTodo(input)
        setInput('')
    }
    return (
        <div>
            <input onChange={e => setInput(e.target.value)} value={input} placeholder="Add a todo!"/>
            <button onClick={addToList}>Submit</button>
        </div>
    )
}

export default AddTodo
