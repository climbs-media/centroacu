import { Component, OnInit } from '@angular/core';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

<<<<<<< HEAD
  public  tituhead: String = ' Chat ';

  constructor() { }
=======
  validations_form: FormGroup;
  image: any;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private contactoService: ChatService,
    private webview: WebView
  ) { }
>>>>>>> ab22a7aaa920a1b675e30f11ebef7b4480872580

  ngOnInit() {
    this.resetFields();
  }

  resetFields() {
    this.validations_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      asunto: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required),
    });
  }


  onSubmit(value) {
    const data = {
      title: value.title,
        email: value.email,
        mensaje: value.mensaje,
        asunto: value.asunto,
    };
    this.contactoService.createContacto(data)
      .then(
        res => {
          this.router.navigate(['/home-user']);
        }
      );
  }


  async presentLoading(loading) {
    return await loading.present();
  }

}
