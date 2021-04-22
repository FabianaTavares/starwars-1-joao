import { PageEvent } from '@angular/material';
import { PlanetasService } from './../../services/planetas.service';
import { Component, OnInit } from '@angular/core';
import { Planetas } from './interface/planetas';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css'],
})
export class PlanetasComponent implements OnInit {
  planetasArray: Planetas[] = [];
  pageIndex: number = 0;
  pageSize!: number;
  constructor(private planetasService: PlanetasService) {}

  ngOnInit(): void {
    this.listarPlanetas(1);
  }

  listarPlanetas(numPaginas: number) {
    this.planetasService.getPlanetas(numPaginas).subscribe(
      (planeta) => {
        this.planetasArray = planeta.results;
        this.pageSize = planeta.count
      },
      (err) => alert('Deu ruim ' + err)
    );
  }

  passarPagina(pe: PageEvent) {
    pe.pageIndex;

    this.listarPlanetas(pe.pageIndex + 1);
  }
}