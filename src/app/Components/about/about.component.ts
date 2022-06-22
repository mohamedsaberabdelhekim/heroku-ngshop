import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  showMenu = false;
  opitan1 = false;
  opitan2 = false;
  opitan3 = false;
  opitan4 = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  openAnsSection(val: any) {
    switch (val) {
      case '1':
        this.opitan1 = !this.opitan1;
        break;
      case '2':
        this.opitan2 = !this.opitan2;
        break;
      case '3':
        this.opitan3 = !this.opitan3;
        break;
      default:
        this.opitan4 = !this.opitan4;
        break;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
