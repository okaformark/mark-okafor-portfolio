'use client';

import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Timeline } from '../app/page';
import HamburgerMenu from './HamburgerMenu';
import { navMenu } from '../data/data';

interface NavbarProps {
	timeline: Timeline;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	isOpen: boolean;
}

const Navbar = ({ timeline, setIsOpen, isOpen }: NavbarProps) => {
	const closeMenu = () => setIsOpen(false);

	const logo = useRef<HTMLDivElement>(null);
	let menu_items = useRef<HTMLDivElement>(null);
	const didAnimate = useRef(false);

	useEffect(() => {
		if (didAnimate.current) return;
		didAnimate.current = true;
		timeline.from(
			[logo.current],
			{
				opacity: 0,
				y: 100,
				delay: 0.5,
				duration: 1,
				immediateRender: false,
				autoAlpha: 0,
			},
			'-=.3'
		);
		timeline.from(
			[menu_items.current],
			{
				opacity: 0,
				y: -100,
				duration: 1,
				immediateRender: false,
				autoAlpha: 0,
			},
			'-=.3'
		);
	});

	return (
		<nav className='container mx-auto justify-between flex items-center h-24 w-full text-white px-4'>
			<div className='invisible w-full' ref={logo}>
				<Link href='/'>
					<h1 className='text-[#30D5C8] hover:text-white hover:underline hover:underline-offset-[12px] hover:decoration-[#30D5C8] '>
						Mark
					</h1>
				</Link>
			</div>

			{/* LARGER SCREEN MENUS */}
			<div className=' invisible px-6 hidden md:flex w-full ' ref={menu_items}>
				<ul
					className={`flex justify-between gap-6 md:space-x-10 xl:space-x-16`}
				>
					{navMenu.map(({ id, title, url }) => (
						<li key={id}>
							<Link href={url}>
								<h2 className='nav-menu capitalize'>{title}</h2>
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* MOBILE MENU AND HAMBURGER */}
			<div className='md:hidden overflow-hidden '>
				<HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
				<ul
					className={`flex flex-col gap-6 absolute ${
						isOpen
							? 'right-6 ease duration-500'
							: '-right-[100%] ease-out duration-500'
					} text-center w-1/4 mt-6`}
				>
					{navMenu.map(({ id, title, url }) => (
						<li key={id} onClick={closeMenu}>
							<Link href={url}>
								<h2 className='nav-menu capitalize'>{title}</h2>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
