const accordionItemHeaders = document.querySelectorAll('.accordion-item-header')

accordionItemHeaders.forEach(item => {
	item.addEventListener('click', () => {
		const anyActiveAccordion = document.querySelector('.accordion-item-header.active')
		if (anyActiveAccordion && anyActiveAccordion !== item) {
			anyActiveAccordion.classList.remove('active')
		}
		item.classList.toggle('active')
	})
})