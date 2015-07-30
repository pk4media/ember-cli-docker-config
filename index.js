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
      switch (typeof config[param]) {
        case 'object':
          configParams.push('"' + param + '": ' + this.dynamicConfig(config[param]));
          break;
        case 'string':
          if (process.env[config[param]]) {
            configParams.push('"' + param + '": "' + process.env[config[param]] + '"');
          }
          break;
        case 'function':
          configParams.push('"' + param + '": "' + config[param](process.env) + '"');
          break;
      }
    }

    return '{' + configParams.join(',') + '}';
  }
};
