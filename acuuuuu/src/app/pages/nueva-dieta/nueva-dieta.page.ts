import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nueva-dieta',
  templateUrl: './nueva-dieta.page.html',
  styleUrls: ['./nueva-dieta.page.scss'],
})
export class NuevaDietaPage implements OnInit {


  public  tituhead: string = 'Seguimiento';
  
  constructor(
    public alertController: AlertController, 
              private loadingCtrl: LoadingController,
              private router: Router,
              private route: ActivatedRoute, 
              private authService: AuthService,
  ) { }

  ngOnInit() {
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
