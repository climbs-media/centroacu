import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  @Input() titulohead: any;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  contacto() {
    this.router.navigate(['/chat']);
  }

}
