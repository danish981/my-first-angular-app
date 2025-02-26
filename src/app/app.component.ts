import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  title = 'first-angular-17-app';
  items = [
    {
      title: 'pakistan is a great country',
      link: 'www.google.com',
    },
    {
      title: 'turkey is a great country',
      link: 'www.turkey.com',
    },
    {
      title : 'Another good country',
      link : 'another good coutnry url'
    }
  ];
}
