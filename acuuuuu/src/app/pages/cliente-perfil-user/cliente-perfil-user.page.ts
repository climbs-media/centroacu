import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { PopoverHistorialDieteticoPage } from '../popover-historial-dietetico/popover-historial-dietetico.page';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cliente-perfil-user',
  templateUrl: './cliente-perfil-user.page.html',
  styleUrls: ['./cliente-perfil-user.page.scss'],
})
export class ClientePerfilUserPage implements OnInit {

  public  tituhead: String = 'Administrar Paciente';
  
  items: Array<any>;
  isAdmin: any = null;
  isPasi: any = null;
  userUid: string = null;

  constructor(
    public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
    this.getCurrentUser();
    this.getCurrentUser2();
  }

  async getData() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere un momento...',
      duration: 1000
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

  getCurrentUser2() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserPacientes(this.userUid).subscribe(userRole => {
          this.isPasi = userRole && Object.assign({}, userRole.roles).hasOwnProperty('pacientes') || false;
          // this.isAdmin = true;
        });
      }
    });
  }

  goAdmin() {
    this.router.navigate(['/home-admin']);
  }

historialesClinicos() {
    this.router.navigate(['/historiales-clinico-user']);
  }

  citas() {
    this.router.navigate(['/citas-admin']);
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
