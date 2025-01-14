import { Component } from '@angular/core';
import { StepsService } from '../../services/steps.service';


@Component({
  selector: 'app-escena',
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {

  constructor(private stepsService: StepsService){}


}
