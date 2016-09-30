import AppDispatcher from '../AppDispatcher'
import { EventEmitter } from 'events';
import uuid from 'uuid'

let _stocks = [];
let _graphs = [];

class StockStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_STOCK':

      //let {data} = action.payload.stockInfo;
      _stocks= [],
      action.payload.stockInfo.map(stock => {
        
        _stocks.push({
             symbol: stock.Symbol,
            name: stock.Name,
            exchange: stock.Exchange,
            id: stock.Symbol
          })})
           
          // symbol: action.payload.stockInfo.Symbol,
          // name: action.payload.stockInfo.Name,
          // high: action.payload.stockInfo.High,
          // low: action.payload.stockInfo.Low,
          // lastPrice: action.payload.stockInfo.LastPrice,
          // id: uuid()

        
       
        
            console.log('_stocks', _stocks)
        this.emit('CHANGE');
        break;
        case 'RECEIVE_GRAPH':
        _graphs.push({
          position: action.payload.stockGraph.Position,
          dates: action.payload.stockGraph.Dates,
          elements:action.payload.stockGraph.Elements
        })
        console.log('_graphs', _graphs)
        this.emit('CHANGE');
        break;
      }
    })
  }
  startListening(cb){
      this.on('CHANGE', cb);
  }
  stopListening(cb){
    this.removeListener('CHANGE', cb)
  }

  getStocks() {
    return _stocks;
  }
  getGraphs(){
    return _graphs;
  }



}



export default new StockStore();