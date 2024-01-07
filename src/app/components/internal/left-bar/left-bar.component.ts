import { CommonModule } from '@angular/common';
import { Component OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }
}
