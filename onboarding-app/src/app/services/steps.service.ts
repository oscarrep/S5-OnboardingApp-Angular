import { Injectable } from '@angular/core';
import { IStep } from '../interfaces/i-step';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps: IStep[] = [
    {
      title: 'Dedica moltes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      img: 'assets/time_managment.svg',
      bgColor: '#4da2a9',
      currentStep: 0,
      element:undefined
    },
    {
      title: 'Programa projectes propis:',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      img: 'assets/programming.svg',
      bgColor: '#d3d4d9',
      currentStep: 1,
      element:undefined
    },
    {
      title: 'Procura descansar:',
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      img: 'assets/meditation.svg',
      bgColor: '#ffd167',
      currentStep: 2,
      element:undefined
    },
  ]

  constructor() { }

  getSteps() {
    return this.steps;
  }
}
