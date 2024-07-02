import { Component, OnInit } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';




@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [IntroductionComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
