import {Component, OnInit} from '@angular/core';
import {
  STATIC_ATTRIBUTE_DESCRIPTION_LABEL,
  STATIC_ATTRIBUTE_DESCRIPTION,
  STATIC_ATTRIBUTE_NOTES
} from '../../../classes/attributes-description';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-static-attributes-tab',
  templateUrl: './static-attributes-tab.component.html',
  styleUrls: ['./static-attributes-tab.component.scss']
})
export class StaticAttributesTabComponent implements OnInit {

  attribute: typeof STATIC_ATTRIBUTE_DESCRIPTION = STATIC_ATTRIBUTE_DESCRIPTION;
  attributeLabel: typeof STATIC_ATTRIBUTE_DESCRIPTION_LABEL = STATIC_ATTRIBUTE_DESCRIPTION_LABEL;

  columnsTable: string[] = ['key', 'value'];
  dataTable: {[key: string]: Array<KeyValue<string, string>>} = STATIC_ATTRIBUTE_NOTES;

  constructor() {
  }

  ngOnInit() {
  }

}
