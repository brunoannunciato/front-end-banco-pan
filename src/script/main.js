const pinHeader = () => {
	const header = document.querySelector('.header');

	document.addEventListener('scroll', () => {
		const currentScroll = window.scrollY;

		currentScroll > 0 ? header.classList.add('--fixed') : header.classList.remove('--fixed');
	});
};

const scrollToSection = () => {
	const links = document.querySelectorAll('[href="#"]');

	links.forEach((link) => {
		const anchor = link.getAttribute('data-link');

		link.addEventListener('click', (event) => {
			event.preventDefault();

			document.querySelector(`[data-anchor="${anchor}"]`).scrollIntoView({
				behavior: 'smooth',
			});
		});
	});
};

const handleVideo = () => {
	const video = document.querySelector('#video');

	document.querySelector('#video-modal').addEventListener('show.bs.modal', () => {
		video.setAttribute('src', 'https://www.youtube.com/embed/x-QKn_GxLwU?autoplay=1');
	});

	document.querySelector('#video-modal').addEventListener('hide.bs.modal', () => {
		video.setAttribute('src', '');
	});
};

document.addEventListener('DOMContentLoaded', () => {
	pinHeader();
	scrollToSection();
	handleVideo();
});
