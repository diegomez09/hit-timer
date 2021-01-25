import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { async } from '@angular/core/testing';
import { title } from 'process';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  activeTime = 5;
  pasiveTime = 3;
  serieTime = 15;
  times: String[] = ['seg', 'min', 'hr'];
  activoUnidad = 'seg';
  reposoUnidad = 'seg';
  entreSeries = 'seg';
  series = 3;
  aux = 0;
  constructor() {}

  ngOnInit(): void {}

  start() {
    this.active();
  }

  active() {
    this.msConverter(this.activoUnidad, this.activeTime);
    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      timer: this.aux,
    });
    this.delay(this.aux).then((any) => {
      this.pasive();
    });
  }

  pasive() {
    this.msConverter(this.reposoUnidad, this.pasiveTime);
    Swal.fire({
      icon: 'warning',
      showConfirmButton: false,
      timer: this.aux,
    });
    this.delay(this.aux).then((any) => {
      console.log('descanso acabo');
    });
  }

  msConverter(medida, time) {
    this.aux = 0;
    switch (medida) {
      case 'seg': {
        this.aux = time * 1000;
        break;
      }
      case 'min': {
        this.aux = time * 60000;
        break;
      }
      case 'hr': {
        this.aux = time * 3600000;
        break;
      }
    }
  }

  async delay(ms: number) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
  }
}
