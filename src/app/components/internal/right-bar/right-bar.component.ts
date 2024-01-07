import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-bar',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

}
