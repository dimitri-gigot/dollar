var html = $(function($el, newContent) {
  if (newContent) $el.innerHTML = newContent
  return $el.innerHTML
})
