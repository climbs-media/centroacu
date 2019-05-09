import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diario-dietetico',
  templateUrl: './diario-dietetico.page.html',
  styleUrls: ['./diario-dietetico.page.scss'],
})
export class DiarioDieteticoPage implements OnInit {

  constructor(private router: Router) { }
  public  tituhead: String = 'Diario Dietetico';
  ngOnInit() {
  }

  diarioDietetico() {
    this.router.navigate(['/crear-diario-dietetico']);
  }
}
