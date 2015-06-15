import config from '../config/environment';
import _ from 'npm:lodash';

console.log('DynamicENV:', window.DynamicENV);
_.merge(config, window.DynamicENV || {});

export { default, initialize } from 'ember-cli-docker-config/initializers/docker-config';
