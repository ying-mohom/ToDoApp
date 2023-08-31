import {React,useState} from "react";
function Counter()
{
  const [count,setCount] = useState(0);
//   const {name,last} = props;

  let countNumber = () => {
     setCount(count+1);
    //  setCount('')
  }
  return(
     <>
       <h3>Count value is: {count} </h3>
       <button onClick={countNumber}>Count</button>
     </>
  );
}
export default Counter;