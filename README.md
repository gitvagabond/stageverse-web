# StageWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

# GIT NOTES

Branch naming conventions
-------------------------------

Use the following grouping tokens (words) at the beginning of your branch names:

```
wip       Works in progress; stuff I know won't be finished soon
feat      Feature I'm adding or expanding
bug       Bug fix or experiment
junk      Throwaway branch created to experiment
```

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

## Production Deployment

1. Ensure AWS credentials exist at ~/.aws/credentials. See this link for more info: [AWS SDK for JavaScript in Node.js](https://aws.amazon.com/sdk-for-node-js/). 
2. Run `npm run deploy`.