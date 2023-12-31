import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatChipsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  count = signal(0);
  
  constructor() {
    this.notify();
  }

  public increment = () => this.count.update(c => c + 1);

  public decrement = () => this.isCountGreaterThanZero() ? this.count.update(c => c - 1) : null;

  public reset = () => this.count.set(0);
  
  public notify() {
    console.log("Notify effect triggered with count: ", this.count());
     effect(() => console.log(this.count()));
  }
  
  get double() {
    return computed(() => this.count() * 2);
  }

  get binaryPower() {
    return computed(() => 2 ** this.count());
  }

  private isCountGreaterThanZero = () => this.count() > 0;
}
