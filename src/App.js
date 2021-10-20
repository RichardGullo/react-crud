import React, { Component, useEffect, useState } from 'react';
import $ from 'jquery';
import Title from './components/Title';
import Table from './components/Table';
import AddInput from './components/AddInput';
import Modal from './components/Modal';
import './App.css';

function App() {

  const[todos, setTodos] = useState([
    {id:1, todo:"Go to market"},
    {id:2, todo:"Go play yugioh"}
  ]);

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


  function showModal(){
    $('#myModal').modal('show');
  }

  return (
    <React.Fragment>
      <Title />
      <div className="main-container">
        
        <AddInput />
        <Table todoList = {todos} />
        <Modal />
      </div>
    </React.Fragment>

  );
  
}

export default App;



