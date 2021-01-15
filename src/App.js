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
          handleClick={this.handleClick}
        />

        <button id="add-rows-btn" onClick={this.addRows}>Add Rows</button>

        <button id="add-cols-btn" onClick={this.addCols}>Add Columns</button>

        <button id="remove-rows-btn" onClick={this.removeRows}>Remove Rows</button>
      
        <div id = "color-selection-panel">
          <h3>Select a color: </h3>
          <select name="colors" id="color-dropdown" value={this.state.color} onChange={this.selectColor}>
            <option value=" " disabled hidden> Colors </option>
            <option class="red" value="red">red</option>
            <option class="blue" value="blue">blue</option>
            <option class="green" value="green">green</option>
            <option class="yellow" value="yellow">yellow</option>
            <option class="orange" value="orange">orange</option>
            <option class="purple" value="purple">purple</option>
            <option class="pink" value="pink">pink</option>
            <option class="brown" value="brown">brown</option>
          </select>  
        </div>
        
      </div>
    )
  }
}

