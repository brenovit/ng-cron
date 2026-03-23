import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  Bs5UnixCronModule,
  Tab,
  CronLocalization,
} from './../projects/ng-cron/src/public-api';

@Component({
  selector: 'storybook-bs5-unix-cron',
  styleUrls: ['../node_modules/bootstrap/scss/bootstrap.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, FormsModule, Bs5UnixCronModule],
  template: `
    <input class="form-control mb-2" readonly [value]="value" />

    <bs5-unix-cron
      name="cron"
      [cssClassPrefix]="cssClassPrefix"
      [activeTab]="activeTab"
      [tabs]="tabs"
      [hideTabs]="hideTabs"
      [localization]="localization"
      [disabled]="disabled"
      [(ngModel)]="value"
      (changed)="changed.emit($event)"
      (tabChanged)="tabChanged.emit($event)"
    >
    </bs5-unix-cron>
  `,
})
export class Bs5UnixCronComponent {
  @Output() readonly changed = new EventEmitter<string>();
  @Output() readonly tabChanged = new EventEmitter<Tab>();
  @Input() cssClassPrefix = '';
  @Input() activeTab: Tab = Tab.SECONDS;
  @Input() tabs: Tab[] | null = null;
  @Input() hideTabs = false;
  @Input() localization?: CronLocalization;
  @Input() value = '';
  @Input() disabled: string | boolean = false;
}
