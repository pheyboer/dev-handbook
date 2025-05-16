# Angular Notes
- Using Angular 16 for course
  - npm i @angular/cli@16.1.6 --location=global
- Angular 17 is the latest


## Angular Application
- SPA - single page application
  - download app initially
  - update only what got changed
  - reduces loading times and server load
- runs on a web server 
  - requires node.js and npm
- Angular CLI is a node package
- stored in local storage of browser 

### Components
- building blocks of angular app
- starts in app.component.html
- TypeScript properties

- to create new component:
  - ng g component component-name

- One way binding
  - display copy of property
  - bind to show in template (html)

### Services
- Communicate with API and database to load into components

### Modules
- located inside of app

## Creating an Angular App
- ng new app-name

## Run app
- ng serve -o
  - opens browser with Angular template

## TypeScript
- Similar to JavaScript and C#
- Adds additional functionality
- Syntax is slightly different
- .ts for TypeScript

- initalizing a field
export class AppComponent {

  title = 'app';
  items = []

}

- TypeScript Array Field
  - add private if want private

- 