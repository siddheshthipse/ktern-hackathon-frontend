import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

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

  makeSense(inputData: any) {
    let countP = 0;
    let countT = 0;
    let countQ = 0;
    let countD = 0;
    this.inputData.forEach((element: any) => {
      if (element.status == 'In Progress') {
        countP++;
      } else if (element.status == 'Testing') {
        countT++;
      } else if (element.status == 'Released in Quality') {
        countQ++;
      } else if (element.status == 'Done') {
        countD++;
      }
    });

    this.actualData = [
      { value: countP, name: 'In Progress' },
      { value: countT, name: 'Testing' },
      { value: countQ, name: 'In Quality' },
      { value: countD, name: 'Done' },
    ]

    console.log('Fimnal Chart Obj');
    console.log(this.actualData);

    this.chartOption = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Status',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '15',
            }
          },
          labelLine: {
            show: false
          },
          data: this.actualData
        }
      ]
    };
  }

  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '15',
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: 'In Progress' },
          { value: 7, name: 'Testing' },
          { value: 5, name: 'In Quality' },
          { value: 4, name: 'Done' },
        ]
      }
    ]
  };

}
