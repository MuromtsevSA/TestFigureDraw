import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() name: string;
  x: number;
  y: number;
  w: number;
  h: number;
  b: number;
  m: number;
  colors: string;
  colorFigure: string;
  colorLine: string;
  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  add(name: string, x: number, y: number, w: number, h: number, b: number, m: number): void{
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.b = b;
    this.m = m;
    if (name === 'line'){
      if (x !== null && y !== null && w !== null && h !== null){
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(w, h);
        return this.ctx.stroke();
      }
    }
    if (name === 'rectangle'){
      if ( x !== null && y !== null && w !== null && h !== null){
        return this.ctx.strokeRect(x, y, w, h);
      }
    }
    if (name === 'triangle') {
      if (x !== null && y !== null && w !== null && h !== null && b !== null && m !== null){
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(w, h);
        this.ctx.lineTo(b, m);
        this.ctx.closePath();
        this.ctx.fillStyle = 'blue';
        return this.ctx.stroke();
      }
    }
    if (name === 'circle'){
      if (x !== null && y !== null && w !== null){
        this.ctx.beginPath();
        this.ctx.arc(x, y , w, 0, 2 * Math.PI);
        return this.ctx.stroke();
      }
    }
    if (name === 'ellipse'){
      if (x !== null && y !== null && w !== null && h !== null){
        this.ctx.beginPath();
        this.ctx.ellipse(x, y, w, h, Math.PI / 4, 0, 2 * Math.PI );
        return this.ctx.stroke();
      }
    }
  }
  getColorBackground(colors: string): string {
    this.colors = colors;
    if (colors !== null){
      return this.ctx.canvas.style.background = this.colors;
    }
  }
  getColorFigure(colorFigure: string): void {
    this.colorFigure = colorFigure;
    if (colorFigure !== null){
      this.ctx.fillStyle = colorFigure;
      return this.ctx.fill();
    }
  }
  getLineColor(colorLine: string): void {
    this.colorLine = colorLine;
    if (colorLine !== null){
      this.ctx.strokeStyle = colorLine;
      return this.ctx.fill();
    }
  }
}
