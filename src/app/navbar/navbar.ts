import {Component} from '@angular/core';

type AsRoute = {
  path: string,
  text: string
}

@Component({
  selector: 'as-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly gmail: string = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=';
  private readonly mailAddress: string = 'michael@palmamendes.ch';
  asRouteHome: AsRoute = {
    path: '/home',
    text: 'Applied Statistics'
  }
  asRouteList: AsRoute[] = [
    {
      path: 'cv',
      text: 'CV'
    },
    {
      path: 'research',
      text: 'Research'
    },
    {
      path: 'teaching',
      text: 'Teaching'
    },
  ]

  contact() {
    window.open(this.gmail + this.mailAddress)
  }
}
