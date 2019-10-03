import {Component, OnInit} from '@angular/core';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public openLink(): void {
    UtilsService.openUrl('https://angular.io');
  }

}
