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
  QuartzCronModule,
  Tab,
  CronLocalization,
} from './../projects/ng-cron/src/public-api';

@Component({
  selector: 'storybook-bs4-quartz-cron',
  styleUrls: ['../node_modules/bootstrap-legacy/scss/bootstrap.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, FormsModule, QuartzCronModule],
  template: `
    <input class="form-control mb-2" readonly [value]="value" />

    <quartz-cron
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
    </quartz-cron>
  `,
})
export class Bs4QuartzCronComponent {
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
