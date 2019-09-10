import {Component, OnInit} from '@angular/core';
import {USEFUL_LINKS} from '../../../classes/attributes-description';

@Component({
  selector: 'app-welcome-tab',
  templateUrl: './welcome-tab.component.html',
  styleUrls: ['./welcome-tab.component.scss']
})
export class WelcomeTabComponent implements OnInit {

  public usefulLinks: typeof USEFUL_LINKS = USEFUL_LINKS;

  constructor() {
  }

  ngOnInit() {
  }

}
