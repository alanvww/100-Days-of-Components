'use client';
import React from 'react';
import { ArrowDown } from 'lucide-react';

const ScrollToMainButton = () => {
	const scrollToMain = () => {
		const mainElement = document.querySelector('main');
		if (mainElement) {
			mainElement.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.error('Main element not found');
		}
	};

	return (
		<button
			onClick={scrollToMain}
			className="fixed w-full h-16 bottom-0  flex flex-row items-center bg-[#D0D0D0] text-foreground transition-colors duration-300 focus:outline-none "
			aria-label="Scroll to main content"
		>
			<div className="w-[100vw] mt-3">
				<ArrowDown size={24} className="relative inline-block mb-4" />
				<span className="align-text-bottom text-2xl text-foreground">
					Scroll to the showcase
				</span>
			</div>
		</button>
	);
};

export default ScrollToMainButton;
