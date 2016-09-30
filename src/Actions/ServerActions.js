import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveStock(stockInfo) {
    AppDispatcher.dispatch ({
      type: 'RECEIVE_STOCK' ,
      payload: {stockInfo}
    })
  },
receiveGraph(stockGraph) {
  AppDispatcher.dispatch ({
    type: 'RECEIVE_GRAPH' ,
    payload: {stockGraph}
  })
}
}
export default ServerActions