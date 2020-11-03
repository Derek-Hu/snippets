require('../css/toolstyle.css');
require('./browserWarning');

var webvowl = require('~/components/webVOWL/webvowl/js/entry');

window.webvowl = webvowl;

module.exports = require('./app');
