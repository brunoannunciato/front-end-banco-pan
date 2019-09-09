document.addEventListener("DOMContentLoaded", function() {
	pinHeader()
	scrollToSection()
})

const pinHeader = () => {
	const header = document.querySelector('.header')
	
	document.addEventListener('scroll', () => {
		let currentScroll = window.scrollY
		
		currentScroll > 0 ? header.classList.add('--fixed') : header.classList.remove('--fixed')
	})
}

const scrollToSection = () => {
	const links = document.querySelectorAll('[href="#"]')

	links.forEach(link => {
		const anchor = link.getAttribute('data-link')

		link.addEventListener('click', event => {
			event.preventDefault();
			
			document.querySelector(`[data-anchor="${anchor}"]`).scrollIntoView({ 
				behavior: 'smooth' 
			});
		})
	})
}