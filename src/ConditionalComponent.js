import React, { useState } from "react";
import Counter from "./Counter";

//JSX and Conditional
// const  ConditionalComponent = () => {
//     const  [display,setDisplay] = useState (true);
//     // if (display) {
//     //     return (
//     //         <>
//     //           <Counter />
//     //         </>
//     //     );
//     // } else {
//     //     return (
//     //         <>
//     //          <h3>Nothing to see Here</h3>
//     //         </>
//     //     );
//     // }

//     //Conditional Rendering Using Elements
//     let output = "";
//     if(display) {
//        output = <h3>This is conditional rendering using elements!</h3>
//     } else {
//        output = <h3>Nothing to see here!</h3>
//     }

//     return  (
//          <>{output}</>
//     );

// }

//Ternary Operator
const ConditionalComponent = (props) => {
    const [display, setDisplay] = useState(true);

    return display ? <h3>This is ternary conditional operator : Written by {props.name} </h3> : <h3>Nothing to See Here</h3>

}

export default ConditionalComponent;

// const prices = [10, 20, 30, 40, 50];

// console.log("The new Price is: " + prices.map((price) => price * 26 / 100))