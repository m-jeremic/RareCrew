import { Component, OnInit } from '@angular/core';
import { Repository } from '../model/repository.model';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { Employee } from '../model/employee.model';

@Component({
    selector: "pie-chart",
    templateUrl: "pieChart.component.html"
})
export class PieChartComponent implements OnInit {

    public chartData: number[];
    public chartLabels: string[];
    public employees: Employee[];
    
    constructor(private repo: Repository) {
        this.chartData = new Array<number>();
        this.chartLabels = new Array<string>();
        this.employees = this.repo.employees2;
        // console.log(this.employees);
        const empArray = from(this.repo.employees2); 
        empArray.pipe(map(emp => { return emp.name })).subscribe(val => this.chartLabels.push(val));
        empArray.pipe(map(emp => { return emp.totalTime })).subscribe(val => this.chartData.push(val));
     }

    ngOnInit(): void {

        var myChart = new Chart('canvas', {
            type: 'pie',
            data: {
                // labels: this.chartLabels,
                labels: ['1','2','3','4','5','6','7','8','9','10','11'],
                datasets: [{ 
                    // data: this.chartData,
                    data:[1,2,3,4,5,6,7,8,9,10,11],
                    backgroundColor: [
                        'rgb(43, 45, 45)',
                        'rgb(103, 103, 103)',
                        'rgb(246, 13, 23)',
                        'rgb(13, 45, 125)',
                        'rgb(43, 45, 45)',
                        'rgb(103, 103, 103)',
                        'rgb(246, 13, 23)',
                        'rgb(13, 45, 125)',
                        'rgb(43, 45, 45)',
                        'rgb(103, 103, 103)',
                        'rgb(246, 13, 23)'
                    ]
                }],
                
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                    }
                }
            }
        });
        
        

    }   


}