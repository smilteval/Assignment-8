import './App.css';
import {Table, TableCell, TableRow} from "./components"

import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super();
    this.state={
      numRows: 3,
      numCols: 3,
      cellColor: "",
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

  render() {
    return (
      <div>
        <Table 
          numRows = {this.state.numRows}
          numCols = {this.state.numCols}
          color = {this.state.color}
        />

        <button id="add-rows-btn" onClick={this.addRows}>Add Rows</button>

        <button id="add-cols-btn" onClick={this.addCols}>Add Columns</button>
      </div>
    )
  }
}

