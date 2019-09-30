import {Component, OnInit} from '@angular/core';
import {USEFULLINKS} from '../../../classes/attributes-description';

@Component({
  selector: 'app-welcome-tab',
  templateUrl: './welcome-tab.component.html',
  styleUrls: ['./welcome-tab.component.scss']
})
export class WelcomeTabComponent implements OnInit {

  public usefulLinks: typeof USEFULLINKS = USEFULLINKS;

  constructor() {
  }

  ngOnInit() {
  }

}
