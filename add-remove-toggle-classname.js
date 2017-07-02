var toggleClass = $(function($el, classnames, forceMethod) {
  // if no class name, stop
  if (!classnames) return;
  // if classnames is a string, cast into an array
  if (typeof classnames === 'string') {
    classnames = [classnames]
  }
  // it should remain only an array, so we can loop through it
  classnames.forEach(function(classname) {
    var method = forceMethod ? forceMethod : $el.classList.contains(classname) ? 'remove' : 'add'
    $el.classList[method](classname)
  })
})

var addClass = $(function($el, classnames) {
  return toggleClass($el, classnames, 'add')
})

var removeClass = $(function($el, classnames) {
  return toggleClass($el, classnames, 'remove')
})
