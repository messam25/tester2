import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  slogan: string = 'Where your taste buds come to life!';
  constructor() {}

  ngOnInit(): void {}
}
