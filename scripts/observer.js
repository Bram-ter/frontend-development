/* -- Intersection observer -- */

const targets = document.querySelectorAll('section')

const options = {
  rootMargin: '0px',
  threshold: 1.0
}

const addClass = (el) => {
	if (!el.classList.contains('activeItem')) {
		el.classList.add('activeItem')
	}
}

const removeClass = (el) => {
	if (el.classList.contains('activeItem')) {
		el.classList.remove('activeItem')
	}
}

const checkIntersecting = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			addClass(entry.target)
		} else {
			removeClass(entry.target)
		}
  })
}

const observer = new IntersectionObserver(checkIntersecting, options)

targets.forEach(target => {
	observer.observe(target)
})

