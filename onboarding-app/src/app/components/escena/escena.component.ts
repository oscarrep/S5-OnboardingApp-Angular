import { Component, Input } from '@angular/core';
import { StepsService } from '../../services/steps.service';
import { IStep } from '../../interfaces/i-step';

@Component({
  selector: 'app-escena',
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
  currentStep: number = 0;
  active: number = 3;
  @Input() stepsArr: IStep[] = [];

  ngOnInit(): void {
    const elements = Array.from(document.querySelectorAll('.slider')) as HTMLElement[];
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    elements.forEach((el, index) => {
      if (this.stepsArr[index]) {
        this.stepsArr[index].element = el;
      }
    });

    if (next && prev) {
      next.onclick = () => {
        this.active = this.active + 1 < this.stepsArr.length ? this.active + 1 : this.active;
        this.loadShow();
      };
      prev.onclick = () => {
        this.active = this.active - 1 >= 0 ? this.active - 1 : this.active;
        this.loadShow();
      };
    }
    this.loadShow();
  }

  constructor(private stepsService: StepsService) { }


  loadShow(): void {
    let stt = 0;
    this.stepsArr[this.active].element!.style.transform = `none`;
    this.stepsArr[this.active].element!.style.zIndex = '1';
    this.stepsArr[this.active].element!.style.filter = 'none';
    this.stepsArr[this.active].element!.style.opacity = '1';
  
    for (let i = this.active + 1; i < this.stepsArr.length; i++) {
      stt++;
      this.stepsArr[i].element!.style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
      this.stepsArr[i].element!.style.zIndex = (-stt).toString();
      this.stepsArr[i].element!.style.filter = 'blur(5px)';
      this.stepsArr[i].element!.style.opacity = stt > 2 ? '0' : '0.6';
    }
  
    stt = 0;
    for (let i = this.active - 1; i >= 0; i--) {
      stt++;
      this.stepsArr[i].element!.style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      this.stepsArr[i].element!.style.zIndex = (-stt).toString();
      this.stepsArr[i].element!.style.filter = 'blur(5px)';
      this.stepsArr[i].element!.style.opacity = stt > 2 ? '0' : '0.6';
    }
  }
  

  navigate(id: number): void {

  }

}
