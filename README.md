# Quartz/Unix Cron Component - Angular

# @brenovit/ng-cron

This library is a fork of [@k0say/ng-cron](https://www.npmjs.com/package/@k0say/ng-cron), that is a fork of [@sbzen/ng-cron](https://www.npmjs.com/package/@sbzen/ng-cron), originally created by **sbzen** and licensed under MIT.

This fork updates Angular and dependencies to newer versions (Angular 20+) and introduces minor improvements for compatibility.

See [LICENSE](./LICENSE) and [NOTICE](./NOTICE) for details.

[Angular](https://angular.io/) cron widget built from the ground up using only [Bootstrap 4](https://getbootstrap.com/) CSS.

Please check the [demo & documentation](https://ngcron.emptyui.com/) and the list of
[issues](https://github.com/ua-cron/angular/issues) to see all the things we are working on. Feel free to make comments there.

<p align="center">
	<a href="https://ngcron.emptyui.com/">
		<img
			width="200"
			src="https://res.cloudinary.com/dwkakr4wt/image/upload/v1661086526/cron/ngcron.png"
			alt="ng-cron">
	</a>
</p>

<p align="center">
	<a href="https://badge.fury.io/js/%40brenovit%2Fng-cron">
		<img
			src="https://img.shields.io/npm/dm/@brenovit/ng-cron.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen"
			alt="npm version">
	</a>
	<a href="https://npmjs.org/%40brenovit%2Fng-cron">
		<img
			src="https://img.shields.io/npm/v/@brenovit/ng-cron.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen"
			alt="npm downloads">
	</a>
</p>

## Getting Started

This is an open source project that builds a cron builder component for Angular applications.
It supports Quartz/Unix cron string formats for both input and output.
Inspired by this [non-angular](https://www.freeformatter.com/cron-expression-generator-quartz.html) implementation.

## Install and use @brenovit/ng-cron

### 1) Install packages

```bash
npm install @brenovit/ng-cron bootstrap
```

### 2) Add Bootstrap CSS (required for default styling)

Add Bootstrap globally (pick one approach):

- `angular.json` (recommended):
	- Add `node_modules/bootstrap/dist/css/bootstrap.min.css` to the `projects.<your-app>.architect.build.options.styles` array.
- Or import it from `src/styles.css`:

```css
@import 'bootstrap/dist/css/bootstrap.min.css';
```

### 3) Import the cron module + FormsModule

If you bind using `[(ngModel)]`, you must import `FormsModule`.

Example for a standalone component:

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bs5QuartzCronModule } from '@brenovit/ng-cron';

@Component({
	selector: 'app-root',
	imports: [Bs5QuartzCronModule, FormsModule],
	templateUrl: './app.html',
})
export class App {
	cronExpression = '0 0/1 * 1/1 * ? *';
}
```

### 4) Use in your template

```html
<bs5-quartz-cron [(ngModel)]="cronExpression"></bs5-quartz-cron>
```

## Usage & Demo
Main source of API documentation and usage scenarios available here: https://ngcron.emptyui.com/.


## Compatibility
The only two required dependencies are Angular and cron-core.
The Bootstrap CSS is optional as you can use this component with your own styling.
Here is the versions compatibility list:

| Ng Cron          |    Angular    |  Bootstrap CSS |
| -------------    | ------------- | -------------- |
| 0.0.1            | 7.x.x         | 4.x.x          |
| 1.0.1            | 11.x.x        | 4.x.x          |
| 2.0.0            | 14.x.x        | 4.x.x          |
| 15.0.0           | 15.x.x        | 4.x.x, 5.x.x   |
| 16.0.0           | 16.x.x        | 4.x.x, 5.x.x   |
| 17.0.0           | 17.x.x        | 4.x.x, 5.x.x   |
| 18.0.0           | 18.x.x        | 4.x.x, 5.x.x   |
| 19.0.0           | 19.x.x        | 4.x.x, 5.x.x   |
| 20.0.0           | 20.x.x        | 4.x.x, 5.x.x   |

