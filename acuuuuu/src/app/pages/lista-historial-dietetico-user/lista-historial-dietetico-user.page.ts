import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lista-historial-dietetico-user',
  templateUrl: './lista-historial-dietetico-user.page.html',
  styleUrls: ['./lista-historial-dietetico-user.page.scss'],
})
export class ListaHistorialDieteticoUserPage implements OnInit {

  public  tituhead: String = 'Lista Historial dietetico User';
  personabuscar: string;
  encontrado = false;
  items: Array<any>;
  searchText = '';
  isAdmin: any = null;
  isPasi: any = null;
  userUid: string = null;


  constructor(public alertController: AlertController,
              private loadingCtrl: LoadingController,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService, ) {
  }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
    this.getCurrentUser();
  }

  async getData() {
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

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = userRole && Object.assign({}, userRole.roles).hasOwnProperty('admin') || false;
          // this.isAdmin = true;
        });
      }
    });
  }



}


