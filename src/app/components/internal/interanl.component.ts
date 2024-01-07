import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interanl',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './interanl.component.html',
  styleUrls: ['./interanl.component.css']
})
export default class InteranlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
