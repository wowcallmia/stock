import React, { Component } from 'react'
import StockStore from '../Store/StockStore'
import { Link } from 'react-router'
import StockActions from '../Actions/StockActions'

export default class TableResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Stocks: StockStore.getStocks(),
      
    }
    this._onChange = this._onChange.bind(this);
    
  }
  componentWillMount(){
    StockStore.startListening(this._onChange)
  }
  componentWillUnmount(){
    StockStore.stopListening(this._onChange)
  }
  _onChange(){
    this.setState({
      Stocks: StockStore.getStocks()
    })

  }
 
    
    
  
  
  
  render(){
    const {Stocks} = this.state;
    console.log(this.state);
    return(
   <div>
        {Stocks.map((stock, i) => (
        <div key={i}>
          <Link className='btn btn-primary btn-xs' to = {`/stock/${stock.symbol}`}>
            
          
          <ul>
            <li>{stock.symbol}</li>
            <li>{stock.name}</li>
            <li>{stock.exchange}</li>      
          </ul>
             </Link>
        </div>
    
    ))}
    
</div>
      )
  }
}

{/*<table className="table table-inverse">
      <thead>
       <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>High</th>
          <th>Low</th>
          <th>LastPrice</th>
        </tr>
      </thead>
      <tbody>
        
        {Stocks.map(stock => (
          
          
          <tr key={stock.id}>
          <td><span style={{"fontWeight":"bold"}}>{stock.symbol}</span></td>
         <td><span style={{"fontWeight":"bold"}}>{stock.name}</span></td>
          <td><span style={{"fontWeight":"bold"}}>{stock.high}</span></td>
          <td><span style={{"fontWeight":"bold"}}>{stock.low}</span></td>
          <td><span style={{"fontWeight":"bold"}}>{stock.lastPrice}</span></td>
          </tr>
        
        ))}
        
      </tbody>
    </table>*/}