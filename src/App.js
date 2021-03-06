import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
    if(localStorage.getItem("todos")===null){
      initTodo =[];
    }
    else{
      initTodo = JSON.parse(localStorage.getItem("todos"))
    }

    const onDelete = (todo)=>{
      //console.log("I am ondelete of todo", todo);
      setTodos(todos.filter((e)=>{
        return e!==todo;
      }))
      localStorage.getItem("todos",JSON.stringify(todos));
    }
 
  const addTodo = (title, desc) =>{
    //console.log("I am adding this todo", title, desc);
    let Sno;
    if(todos.length===0){
      Sno = 0;
    }
    else{
      Sno = todos[todos.length -1].Sno +1;
    }
    const MyTodo={
      Title: title,
      Desc: desc,
      Sno: Sno,
    }
    setTodos([...todos, MyTodo]);
    //console.log(MyTodo);    
  }

  const [todos, setTodos] = useState (initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
    <Header title="My todos-list" searchBar={false}/><br/><br/>
    <Switch>
      <Route exact path="/" render={()=>{
        return(
        <>
            <Todos todos={todos} onDelete={onDelete}/>    <br/><br/><br/>
            <AddTodo addTodo={addTodo}/>
        </>)
      }}>
            </Route>
          <Route exact path="/about">
            <About />
      </Route>
    </Switch>
    
    <Footer/> 
    </Router> 
    </>
  );
}

export default App;
