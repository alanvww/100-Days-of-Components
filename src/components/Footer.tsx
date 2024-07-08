'use client';

const Footer = () => {
	// Scroll the page to the top when the button is clicked
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<footer
			className="absolute top-[197vh] h-[3vh] w-full bg-foreground py-2"
			onClick={scrollToTop}
		>
			<p className="  text-center text-sm text-white m-auto h-auto ">
				&copy; 2024 Alan Ren. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
