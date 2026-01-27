import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Navbar} from './navbar/navbar';

@Component({
  selector: 'as-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
