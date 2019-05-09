import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {

  public  tituhead: String = 'Centro ACU 10';

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  barChart: any;
  lineChart: Chart;


  constructor(public navCtrl: NavController) { }

  ngOnInit() { }

public doughnutChartLabels:string[] = ['Poco Peso', 'Peso Ideal', 'Sobre Peso'];
public doughnutChartData:number[] = [50, 80, 100];
public doughnutChartType:string = 'doughnut';

// events
public chartClicked(e: any): void {
  console.log(e);
}

public chartHovered(e: any): void {
  console.log(e);
}

}

