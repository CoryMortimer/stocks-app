# Stocks

## Overview

The app contains 3 pages:
* Dashboard
* News Creator
* News

### Dashboard

Dashboard contains an overview of stock and news information. You can click on a news article to navigate to the article to read its content.

### News Creator

Step through the wizard to add meta data and content. You will not be able to advance to the next steps until the current step is complete. Decreasing the screen size to mobile will turn the wizard into a verital stepper.

### News

A sample page that shows reusing of the articles component. Clicking on the article will take the user to the article itself. That page demonstrates the reusability of the article component. It uses a resolver to fetch the article before navigating to the page.

## Running the Application

Make sure you have the [Angular CLI](https://cli.angular.io/) installed.

Using the develop branch
* `npm install`
* `ng serve`

The web application will be located at [localhost:4200](http://localhost:4200).

## Network Requests

The angular-in-memory-web-api package allows network calls to be simulated. All of the data can be found in the src/testing folder.

## Tests

A small amount of unit and component tests were written to cover some of the logic.

* `ng test`

## Continuous Integration and Continuous Deployment

When a branch gets merged into develop, it automatically builds the production Angular app and deploys it to https://corymortimer.com/stocks-app. Because the webapp is hosted on github pages, it is not possible to type into the url bar anything besides the above url. To get to any other page, the user must click the appropriate links. There is no server side code to resolve any other url. The web application is pushed to the gh-pages branch.

## Docker Containers

It is possible to use containers to develop on this application. Running `make dev` from the root of the repo will launch a docker container that is bound to the current working directory.
