import React, { Component } from 'react'
import StockActions from '../Actions/StockActions'
import $ from 'jquery'

export default class Repo extends Component {
constructor(props){
  super(props);
}
// _getChart(){
// let variable = {this.props.params.symbol}
//}



// _getChart(){
//   $(document).ready(function() {
//     var options = {
//         chart: {
//             renderTo: 'container',
//             type: 'spline'
//         },
//         series: [{}]
//     };
    
//     var url =  "http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22AAPL%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D";
//     $.getJSON(url,  function(data) {
//         options.series[0].data = data;
//         var chart = new Highcharts.Chart(options);
//         console.log('chart', chart)
//     });
// })
// }



// componentDidMount(){
//   StockActions.createGraph(this.props.params.symbol);
// }

  render(){
    return(
      <div >
      
        <h1 id='cool'>{this.props.params.symbol}</h1>

      </div>
      )
  }
}