/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-docker-config',

  contentFor: function(type, config) {
    if (type === 'head') {
      return '<script type="text/javascript">window.DynamicENV = ' +
        this.dynamicConfig(config.DynamicConfig) +
        ';</script>';
    }
  },

  dynamicConfig: function(config) {
    var param;

    if (!config) {
      return '';
    }

    var configParams = [];
    for (param in config) {
      if (typeof config[param] === 'object') {
        configParams.push('"' + param + '": ' + this.dynamicConfig(config[param]));
      } else {
        if (process.env[config[param]]) {
          configParams.push('"' + param + '": "' + process.env[config[param]] + '"');
        }
      }
    }

    return '{' + configParams.join(',') + '}';
  }
};
