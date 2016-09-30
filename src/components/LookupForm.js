import React, { Component } from 'react'
import StockActions from '../Actions/StockActions'

export default class Form extends Component {
  constructor() {
    super();
    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(e){
      e.preventDefault();
        const {stocks} = this.refs;
      let stockInfo = stocks.value;
      StockActions.createStock(stockInfo);
      stocks.value = ''

        // stocks: stocks.value
      }



  render() {
    return (
      
      <form onSubmit = {this._submitForm} className="form-inline text-center">
  <div className="form-group">
    <label >Lookup Stock</label>
    <input ref = 'stocks' type="text" className="form-control" id="examplestock" aria-describedby="stockhelp" placeholder="Enter stock" required/>
    <small id="emailHelp" className="form-text text-muted">Put in stock tag</small>
  </div>
  <button className="btn btn-primary">Lookup Stock!</button>
  </form>
    
    )
  }
}
