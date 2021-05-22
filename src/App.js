import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, {useState} from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

 const [todos, setTodos] = useState ([
    {
      Sno: 1,
      Title: "Read the book",
      Desc: "Complete the book Little Women, its been an year since you started reading it."
    },
    {
      Sno: 2,
      Title: "Go to the market",
      Desc: "Go get sprite for watermelon mojito."
    },
    {
      Sno: 3,
      Title: "Order t-shirts",
      Desc: "You are running out of summer clothes, quickly order t-shirts."
    },
  ]);

  return (
    <>
    <Header title="My todos-list" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>  
    </>
  );
}

export default App;
