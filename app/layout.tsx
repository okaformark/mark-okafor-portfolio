'use client';
import Navbar from '../component/Navbar';
import './globals.css';
import { useEffect, useState } from 'react';
import { TimeLine } from '../component/timeline';
import Footer from '../component/Footer';

export type Timeline = gsap.core.Timeline;
export type Ease = gsap.EaseFunction;

let timeline: Timeline = TimeLine();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [navBgColor, setNavBgColor] = useState(false);

	const changeColor = () => {
		if (typeof window !== undefined)
			if (window.scrollY >= 96) setNavBgColor(true);
			else setNavBgColor(false);
	};

	useEffect(() => {
		if (typeof window !== undefined)
			window.addEventListener('scroll', changeColor);
		return () => window.removeEventListener('scroll', changeColor);
	});

	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<div className='pattern'></div>
				<div className=' flex flex-col overflow-hidden'>
					<header
						className={`w-full ${
							navBgColor ? 'bg-black' : 'bg-transparent'
						} h-24 fixed z-20 top-0 left-0`}
					>
						<Navbar timeline={timeline} isOpen={isOpen} setIsOpen={setIsOpen} />
					</header>

					<main
						className={` w-full container mx-auto px-6 ${
							isOpen
								? 'translate-y-[30%] ease-out duration-500'
								: 'translate-y-0 ease-in duration-500 mt-24 z-10 '
						}`}
					>
						{children}
					</main>
					<div className='w-full bg-[#30D5C8] h-auto 2xl:fixed lg:bottom-0 mt-12 z-10'>
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
