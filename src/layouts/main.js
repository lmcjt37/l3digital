window.onload = function() {
  var section = document.querySelectorAll('.smooth-scroll-section'),
    sections = {}

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = {
      start: e.offsetTop,
      end: e.offsetTop + e.offsetHeight,
    }

    document
      .querySelector('a[href*=' + e.id + ']:not([href="#"]')
      .addEventListener('click', function(evt) {
        window.scroll({
          top: sections[e.id].start,
          left: 0,
          behavior: 'smooth',
        })
        evt.preventDefault()
      })
  })
}
