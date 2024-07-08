'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Navigation = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<nav
			className={`
        flex flex-row justify-center text-lg space-x-4 p-2 bg-[#E0E0E0] 
        overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}
      `}
		>
			<a href="https://alan.ooo" className="hover:underline">
				Portfolio
			</a>
			<a href="https://itp.alan.ooo" className="hover:underline">
				ITP Blog
			</a>
			<a
				href="https://www.linkedin.com/in/junhao-ren/"
				className="hover:underline"
			>
				Linkedin
			</a>
			<a href="https://github.com/alanvww" className="hover:underline">
				Github
			</a>
			<a href="#" className="hover:underline">
				Resume
			</a>
		</nav>
	);
};

const Header = () => {
	const [showNav, setShowNav] = useState(false);

	return (
		<header className="select-none fixed top-0 left-0 w-full h-fit flex flex-col text-foreground bg-[#D0D0D0]">
			<div
				className="flex flex-row items-center justify-start cursor-pointer"
				onClick={() => setShowNav(!showNav)}
			>
				<h1 className="text-8xl font-bold my-4 mx-2">
					100 Days of Components
					<span className="text-3xl relative">
						{' by Alan Ren'}
						<ChevronRight
							className={`inline-block ml-2 transition-transform duration-300 ${
								showNav ? 'rotate-90' : ''
							}`}
							size={24}
						/>
					</span>
				</h1>
			</div>
			<Navigation isOpen={showNav} />
		</header>
	);
};

export default Header;
