import { Component, Input } from '@angular/core';
import { StepsService } from '../../services/steps.service';
import { CommonModule } from '@angular/common';
import { IStep } from '../../interfaces/i-step'


@Component({
  selector: 'app-escena',
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {

  constructor(private stepsService: StepsService) { }
  @Input() stepsArr: IStep[] = [];
}
