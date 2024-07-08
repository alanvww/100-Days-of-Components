import ButtonShowcase from '@/components/ButtonShowcase';
import ScrollToMainButton from '@/components/ScrollToMainButton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<iframe
				src="https://unicorn.studio/embed/hnfy32sHIZJ8dWXkKBux?scale=1&dpi=2&fps=120"
				className="w-full h-[100vh] fixed top-0 left-0 z-[-1]"
				width="100%"
				height="100%"
				loading="lazy"
			></iframe>
			<ScrollToMainButton />
			<main className="absolute top-[100vh] bg-background w-full min-h-[97vh] drop-shadow-lg z-auto">
				<div className="p-4 h-[100vh]">
					<h1 className="text-7xl font-bold mb-8 inline-block relative group">
						Components Showcase
						<span className="absolute bottom-0 left-0 w-full h-2 bg-foreground origin-left transform scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100"></span>
					</h1>
					<ButtonShowcase />
				</div>
			</main>
			<Footer />
		</>
	);
}
