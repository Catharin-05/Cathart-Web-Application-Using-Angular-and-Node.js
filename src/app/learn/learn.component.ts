import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from "three";



@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent implements AfterViewInit {
  @ViewChild('myCanvas')
  myCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(): void {
    const canvas = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    // Your drawing logic goes here
   
  }
}

