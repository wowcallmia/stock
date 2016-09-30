import ServerActions from './Actions/ServerActions';
import jsonp from 'jsonp'

const API = {
createStock(stockInfo){
  

jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${stockInfo}`, (err, stockInfo) => {

  console.log('err:', err)
  console.log('stockInfo', stockInfo)
ServerActions.receiveStock(stockInfo)
})
},
createGraph(stockGraph){
  jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22${stockGraph}%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D` , (err, stockGraph) =>{

    consol.log('err:', err)
    console.log('stockGraph:', stockGraph)
    ServerActions.receiveGraph(stockGraph)
  })
}

}
export default API

//http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${stockInfo}
//http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22NFLX%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D