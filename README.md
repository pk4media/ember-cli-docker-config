# Ember-cli-docker-config

This ember-cli addon provides dynamic configuration for ember-cli projects using environment variables.

The main purpose of this addon is to allow an ember app to be packaged in a docker build and use standard docker environment variables to manage the custom configuration for a deployment.

## Installation

* `ember install ember-cli-docker-config`

## Usage

Add a DynamicConfig entry to your config/environment.js file. Each key under DynamicConfig represents an environment.js config entry, while the value is the environment variable that will override that field if it's present.

Example:
```
DynamicConfig: {
  baseURL: 'APP_BASE_URL',
  'simple-auth': {
    authenticationRoute: 'application.login'
  }
}
```

## Development

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
