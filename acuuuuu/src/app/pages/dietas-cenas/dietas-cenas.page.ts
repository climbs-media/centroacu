import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dietas-cenas',
  templateUrl: './dietas-cenas.page.html',
  styleUrls: ['./dietas-cenas.page.scss'],
})
export class DietasCenasPage implements OnInit {
  public  tituhead: String = 'Dietas Cenas';
  items: Array<any>;
  searchText = '';
  isAdmin: any = null;
  isPasi: any = null;
  userUid: string = null;


  constructor(public alertController: AlertController,
              private loadingCtrl: LoadingController,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              ) {
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


  async presentLoading(loading) {
    return await loading.present();
  }

  crearCena() {
    this.router.navigate(['/menu-cena']);
  }

  onLogout() {
    this.authService.doLogout()
      .then(res => {
        this.router.navigate(['/login-admin']);
      }, err => {
        console.log(err);
      });
  }

}

