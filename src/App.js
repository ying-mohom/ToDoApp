import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import ConditionalComponent from "./ConditionalComponent";
import Product from "./Product";
import Form from "./Form";
import Todo from "./Todo"
import Header from './Header';
import TestReducer from "./TestReducer";
import Context from './Context';
import "./ToDo.css";


function App() {
  return (

    <div className='App'>
      <Header />
      <Todo />
    </div>
    // <Context.Provider value="Hello World">Context Api
    //   <Form />
    // </Context.Provider>

  );
}

export default App;
