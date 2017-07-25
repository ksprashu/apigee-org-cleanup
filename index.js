const Promise = require('bluebird');
const request = require('request');
const _ = require('lodash');



console.log('cleanup org ')
Promise.delay(10)
.then(deleteApps)
.then(deleteProducts)
.then(deleteCaches)
.then(deleteProxies)
.then