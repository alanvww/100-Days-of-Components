import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import './globals.css';

const syne = Syne({
	weight: '400',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '100 Days of Button',
	description: '100 Days of Button by Alan Ren',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${syne.className} overscroll-y-none`}>{children}</body>
		</html>
	);
}
