import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Context from "./Context";
function Form() {
    const value = useContext(Context);
    console.log(value);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {

    }, []);

    const handleSubmit = (e) => {
        alert(`First Name: ${firstName}, Last Name: ${lastName}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>

    );

}
export default Form;