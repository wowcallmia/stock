import API from '../API'

const StockActions = {
  createStock(stockInfo) {
    console.log('stockInfo', stockInfo)
    API.createStock(stockInfo);
    },
  createGraph(stockGraph) {
    console.log('stockGraph:', stockGraph)
    API.createGraph(stockGraph);
  }
  }
  
  export default StockActions