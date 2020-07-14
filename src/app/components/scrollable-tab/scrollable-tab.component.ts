import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.sass']
})
export class ScrollableTabComponent implements OnInit {

  constructor() {
  }

  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Output() tabSelected = new EventEmitter();

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

  ngOnInit(): void {
  }

}
