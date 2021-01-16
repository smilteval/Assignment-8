import './App.css';
import Table from "./components/Table"

import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super();
    this.state={
      numRows: 3,
      numCols: 3,
      cellColor: " ",
    }
  }

  addRows=()=>{
    this.setState({
      numRows: this.state.numRows + 1
    })
  }

  addCols=()=>{
    this.setState({
      numCols: this.state.numCols + 1
    })
  }

  removeRows=()=>{
    this.setState({
      numRows: this.state.numRows - 1
    })
  }

  removeCols=()=>{
    this.setState({
      numCols: this.state.numCols - 1
    })
  }

  selectColor=(event)=>{
    this.setState({
      color: event.target.value
    })
  }

  handleClick=(event)=>{
    event.target.style.backgroundColor = this.state.color;
  }

  render() {
    return (
      <div>
        <Table 
          numRows = {this.state.numRows}
          numCols = {this.state.numCols}
          color = {this.state.color}
          handleClick = {this.handleClick}
        />

        <button id="add-rows-btn" onClick={this.addRows}>Add Rows</button>
        <button id="add-cols-btn" onClick={this.addCols}>Add Columns</button>
        <button id="remove-rows-btn" onClick={this.removeRows}>Remove Rows</button>
        <button id="remove-cols-btn" onClick={this.removeCols}>Remove Columns</button>
      
        <div id = "color-selection-panel">
          <h3>Select a color: </h3>
          <select name="colors" id="color-dropdown" value={this.state.color} onChange={this.selectColor}>
            <option value=" " selected disabled hidden> Colors </option>
            <option className="red" value="red">red</option>
            <option className="blue" value="blue">blue</option>
            <option className="green" value="green">green</option>
            <option className="yellow" value="yellow">yellow</option>
            <option className="orange" value="orange">orange</option>
            <option className="purple" value="purple">purple</option>
            <option className="pink" value="pink">pink</option>
            <option className="brown" value="brown">brown</option>
          </select>  
        </div>

        <h3>To color one cell, select a color and click on that cell.</h3>
        
      </div>
    )
  }
}

