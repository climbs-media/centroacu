import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {


  items: Array<any>;
  searchText = '';
  public  tituhead: String = 'Centro ACU 10';

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  barChart: any;
  lineChart: Chart;


  constructor(public navCtrl: NavController,
    public alertController: AlertController, 
              private loadingCtrl: LoadingController,
              private router: Router,
              private route: ActivatedRoute,) { }

              ngOnInit() {
                if (this.route && this.route.data) {
                  this.getData();
                }
              }
            
              async getData(){
                const loading = await this.loadingCtrl.create({
                  message: 'Espere un momento...'
                });
                this.presentLoading(loading);
            
                this.route.data.subscribe(routeData => {
                  routeData['data'].subscribe(data => {
                    loading.dismiss();
                    this.items = data;
                  });
                });
              }
            
              async presentLoading(loading) {
                return await loading.present();
              }

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

