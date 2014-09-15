
/**
 * Module dependencies.
 */

var format = require('bdo-labs/format').format;

/**
 * Expose ´icon´.
 */

module.exports = icon;

/**
 * Icon
 *
 * @return {Object}
 */

function icon(){
  function link(scope, el, attrs){
    attrs.type = attrs.type || 'fontAwesome';
    [attrs.type](scope, el, attrs);
  }
  return {
    restrict: 'E',
    scope: '=',
    link: fontAwesome
  };
}

/**
 * Font awesome type icons.
 *
 * @param {Object} scope
 * @param {JQLite} el
 * @param {Object} attrs
 */

function fontAwesome(scope, el, attrs){
  el.addClass(format('fa fa-%s', attrs.name));
}
