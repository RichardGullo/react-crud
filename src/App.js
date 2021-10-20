import React, { Component, useEffect, useState } from 'react';
import $ from 'jquery';
import Title from './components/Title';
import Table from './components/Table';
import AddInput from './components/AddInput';
import Modal from './components/Modal';
import axios from "axios";
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

function App() {

  const[todos, setTodos] = useState([

  ]);

  const[todoText, setTodoText] = useState("Example Text");

  useEffect(()=>{
    populateArray();
  },[])

  function populateArray(){
    console.log("Populate Array");

    fetch('http://localhost:3000/populate-item')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        setTodos(data);
    
    })
  }

  function addItem(event){
    event.preventDefault();
    console.log(event.target);

    axios.post('http://localhost:3000/create-item', {text:todoText})
    .then(function(res){
        console.log(res);
        // todos.push({text:res.data.text, _id:res.data._id});
        const tempTodos = [...todos];
        tempTodos.push({text:res.data.text, _id:res.data._id});
        setTodos(tempTodos);
    });
  }

  function changeTodoText(event){
    console.log(event.target.value);
    setTodoText(event.target.value);
  }

  function deleteEntry(event){
    console.log(event.target.closest("tr").rowIndex);
    console.log(event.currentTarget.getAttribute("data-id"));
    console.log("hello");
    let id = event.currentTarget.getAttribute("data-id");
    
    axios.post('http://localhost:3000/delete-item', {id: event.currentTarget.getAttribute("data-id") }).then(function () {
     
      const tempTodos = [...todos];
      const filteredTodos = tempTodos.filter((tempTodo) => tempTodo._id != id);
      setTodos(filteredTodos);


  }).catch(function () {
      console.log("Please try again later.");
  })
    
  }


  function showModal(){
    $('#myModal').modal('show');
  }

  return (
    <React.Fragment>
      <Title />
      <div className="main-container">
        
        <AddInput onChangeTodoText = {changeTodoText} onTodoText = {todoText} onAddItem = {addItem} />
        <Table todoList = {todos} onDeleteEntry = {deleteEntry} />
        <Modal />
      </div>
    </React.Fragment>

  );
  
}

export default App;



