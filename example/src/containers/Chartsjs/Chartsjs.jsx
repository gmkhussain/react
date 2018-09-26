import React, { Component } from 'react'
import {Doughnut, Line} from 'react-chartjs-2';

class Chartsjs extends Component{
  constructor(props){
      super(props)
      this.state = {
        chartData: {
            labels: ["2011", "2012", "2013", "2014"],
            datasets: [
                {
                label: '# of Votes',
                data: [12, 19, 444, 115],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 2
            },
            {
                label: '# of Votes',
                data: [0, 219,23, 15],
                backgroundColor: [
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 0 , 255, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 2
            }
        ]
        }
      }
  }

render(){
    return(
        <div>
            <Line data={this.state.chartData} height="50" />
            <Doughnut data={this.state.chartData} height="50" />
        </div>
    )
}


}


export default Chartsjs