import React, { useState, useReducer } from "react";

const initialValue = {
    people: [],
};

function reducer(state, action) {
    if (action.type === 'INPUT_ADDED') {
        const newPeople = [...state.people, action.payload]
        return { ...state, people: newPeople };

    }
    return state;
}

function App() {
    const [inputValue, setInputValue] = useState("");

    const [state, dispatch] = useReducer(reducer, initialValue);

    const submitHandler = (e) => {
        e.preventDefault();
        const newItem = { id: Math.random().toString(), name: inputValue };
        dispatch({ type: "INPUT_ADDED", payload: newItem });
        setInputValue("");
    };

    console.log(state);
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={inputValue} placeholder="Enter Your text" onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {state.people.map((person) =>
                    <li key={person.id}>{person.name}</li>
                )}
            </ul>
        </div>
    );
}

export default App;
