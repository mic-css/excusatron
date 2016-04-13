# Excusatron

Sometimes you just need a good excuse. Chronically late? Awkward breakup? Really don't want to go to that party? Don't hurt someone's feelings by ghosting! Excusatron is here to help with brilliant excuses for every occasion.

## Objectives

Excusatron was built for the [Makers Academy](http://www.makersacademy.com/) Makerthon, a three-day hackathon to build and showcase interesting and often funny projects. We chose to tackle AngularJS on top of Rails to build a lightweight but extensible stack. WARNING: the project was not TDD'd due to time constraints and unforeseen complications with getting Angular and Rails to play nice 😅

![Landing page](/screenshots/landing-page.png)


![Excuse](/screenshots/excuse.png)

## Team

* [Mic Cassano](https://github.com/mic-css)
* [Henry "Harry" Gordon](https://github.com/hwgordon247)
* [Constantin Kalinin](https://github.com/tishayaem)
* [Jeremy Barrass](https://github.com/Jeremy-Barrass)

## Technologies

* Ruby on Rails
* AngularJS
* Testing frameworks: RSpec, Karma, Protractor

## Instructions

Clone this repo and make some of your own excuses!

```sh
$ git clone https://github.com/mic-css/excusatron.git
$ cd excusatron
```

#### Build

From the root directory, run:
* `bundle` to install and update any Gem dependencies
* `npm install` to install any front-end dependencies. This will automatically run `bower install` too

#### Run

To start the app make sure you have successfully run the above build scripts, then:
* Run `rails s`
* Navigate to [localhost:3000](localhost:3000)

#### Test

Make sure you've run the install scripts above, as well as `npm run update-webdriver` should you want to run the feature tests. Then, run:
* `rspec` for back-end tests
* `npm run test` for front-end tests
* `npm run protractor` for feature tests. You will need to run an instance of the server and `webdriver-manager start` in separate terminal panes.
