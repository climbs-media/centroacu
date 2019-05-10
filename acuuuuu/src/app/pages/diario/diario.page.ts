import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {

  public  tituhead: String = 'Centro ACU 10';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  diarioDietetico() {
    this.router.navigate(['/lista-historial-dietetico']);
  }

}
