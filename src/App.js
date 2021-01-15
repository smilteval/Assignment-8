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

  render() {
    return (
      <div>
        <Table 
          numRows = {this.state.numRows}
          numCols = {this.state.numCols}
          color = {this.state.color}
        />
      </div>
    )
  }
}

