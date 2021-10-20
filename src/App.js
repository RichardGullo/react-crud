import React, { Component, useState } from 'react';
import $ from 'jquery';
import Title from './components/Title';
import Table from './components/Table';
import AddInput from './components/AddInput';
import Modal from './components/Modal';
import './App.css';

function App() {


  function showModal(){
    $('#myModal').modal('show');
  }

  return (
    <React.Fragment>
      <Title />
      <div className="main-container">
        
        <AddInput />
        <Table />
        <Modal />
      </div>
    </React.Fragment>

  );
  
}

export default App;



