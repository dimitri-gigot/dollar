function $(fn) {
  if (typeof fn === 'string') return document.querySelectorAll(fn);
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var selector = args[0];
    var $els = typeof selector === 'string' ? $(selector) : selector.constructor.name === 'Array' ? selector : [selector];
    var results = [];
    $els.forEach(function($el) {
      args.splice(0, 1, $el);
      results.push(fn.apply($el, args));
    });
    return results
  }
}
