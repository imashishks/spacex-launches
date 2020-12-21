# Spacex Launches

## About the Application
This application lists out all the space exploration which have happened over the course of history. There are filters provided to streamline the results based on year and whether the launch and landing were successful or not.

## Project Structure
Highlighting the project structure
```|— app
     |— core
	        |— [+] components
	        |— [+] services
          |— core.module.ts
     |— features
	        |— home
               |— home.component.ts|html|scss|spec
               |— home-routing.module.ts
               |— home.module.ts
     |— shared
          |— [+] components
          |— [+] directives
          |— [+] constants
          |— [+] models
 	        |— [+] services
	        |— share.module.ts
     |— app.component.ts|html|scss|spec
     |— app-routing.module.ts
     |— app.module.ts

```

 Core
This folder contains the universal components and other features where there’s only once instance per application.The core module is directly added to the app module. 
	*  *Components*
	        1. Header - This is the component which contains the header part of the app
	        2. Footer - This is the component which contains the footer part of the app
  *  *Services*
	        1. Http - This is the service which is used to make get request

### Feature
This folder represents the individual feature component. This project has only one feature i.e. home

### Shared
This folder contains all the implmentation which can be shared between different feature components / modules.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
