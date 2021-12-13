/* -- Intersection observer -- */

const targets = document.querySelectorAll('section')

const options = {
  rootMargin: '0px',
  threshold: 1.0
}

const addClass = (el) => {
	if (!el.classList.contains('testClass')) {
		el.classList.add('testClass')
	}
}

const removeClass = (el) => {
	if (el.classList.contains('testClass')) {
		el.classList.remove('testClass')
	}
}

const doThings = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			addClass(entry.target)
		} else {
			removeClass(entry.target)
		}
  })
}

const observer = new IntersectionObserver(doThings, options)

targets.forEach(target => {
	observer.observe(target)
})