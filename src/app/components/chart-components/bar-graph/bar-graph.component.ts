import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent implements OnInit {
  @Input() inputData: any;
  actualData: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputData);

    setTimeout(() => {
      this.makeSense(this.inputData)
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.makeSense(changes['inputData'].currentValue);
  }

  makeSense(inputData:any){

    // const sample = inputData.filter((item:any) => item.status == 'In Progress' && item.assignedTo == 'AVINASH SINGH');
    // console.log('Sample Data is');
    // console.log(sample.length);

    let avP = inputData.filter((item:any) => item.status == 'In Progress' && item.assignedTo == 'AVINASH SINGH');
    let avT = inputData.filter((item:any) => item.status == 'Testing' && item.assignedTo == 'AVINASH SINGH');
    let avQ = inputData.filter((item:any) => item.status == 'Released in Quality' && item.assignedTo == 'AVINASH SINGH'); 
    let avD = inputData.filter((item:any) => item.status == 'Done' && item.assignedTo == 'AVINASH SINGH');

    let siP = inputData.filter((item:any) => item.status == 'In Progress' && item.assignedTo == 'Siddhesh Thipse'); 
    let siT = inputData.filter((item:any) => item.status == 'Testing' && item.assignedTo == 'Siddhesh Thipse');
    let siQ = inputData.filter((item:any) => item.status == 'Released in Quality' && item.assignedTo == 'Siddhesh Thipse');
    let siD = inputData.filter((item:any) => item.status == 'Done' && item.assignedTo == 'Siddhesh Thipse'); 

    const chartDataSource = [
      ['name', 'In Progress', 'Testing', 'Released in Quality', 'Done'],
        ['Siddhesh Thipse', siP.length, siT.length, siQ.length, siD.length],
        ['AVINASH SINGH', avP.length, avT.length, avQ.length, avD.length],
    ]

    console.log('dsggagg');
    console.log(chartDataSource);
    
    this.chartOption= {
      legend: {},
      tooltip: {},
      dataset: {
        source: chartDataSource
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    };
  }

  chartOption:EChartsOption = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['name', 'In Progress', 'Testing', 'Released in Quality', 'Done'],
        ['Siddhesh Thipse', 43.3, 85.8, 93.7, 45, 67],
        ['Avinash Singh', 22, 15, 55.1, 56],
      ],
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };
}
