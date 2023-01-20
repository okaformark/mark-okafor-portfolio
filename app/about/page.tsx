'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';
import pic1 from '../../public/assets/pic1.jpeg';
import pic2 from '../../public/assets/pic2.png';
import { Timeline } from '../page';
import { Ease, TimeLine } from '../../component/timeline';
import { BsChevronCompactRight } from 'react-icons/bs';

const About = () => {
	const ele = useRef<HTMLDivElement>(null);
	const image1 = useRef<HTMLDivElement>(null);
	const image2 = useRef<HTMLDivElement>(null);
	const h2Ref = useRef<HTMLHeadingElement>(null);
	const pRef = useRef<HTMLParagraphElement>(null);
	const btnRef = useRef<HTMLButtonElement>(null);
	const didAnimate = useRef(false);
	const didAnimateImage = useRef(false);

	let timeline: Timeline = TimeLine();
	let ease = Ease();

	useEffect(() => {
		const typed = new Typed(ele.current!, {
			strings: [
				' Front-end Engineer',
				' Back-end Engineer',
				' Data Scientist',
				' Machine Learning Engineer',
			],
			startDelay: 300,
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 100,
			smartBackspace: true,
			loop: true,
			showCursor: true,
			cursorChar: '!',
		});

		return () => {
			typed.destroy();
		};
	}, []);

	useEffect(() => {
		if (didAnimate.current) return;
		didAnimate.current = true;
		timeline.from(
			[h2Ref.current, pRef.current, btnRef.current],
			1,
			{
				opacity: 0,
				x: -100,
				delay: 1,
				duration: 1,
				immediateRender: false,
				autoAlpha: 0,
			},
			'-=.5'
		);
	}, [timeline]);

	useEffect(() => {
		if (didAnimateImage.current) return;
		didAnimateImage.current = true;
		timeline
			.from(
				image1.current,
				1,
				{
					y: 200,
					opacity: 0,
					ease: ease,
					immediateRender: false,
					autoAlpha: 0,
				},
				'-=.1'
			)
			.from(
				image1.current,
				1.5,
				{
					scale: 1.6,
					ease: ease,
					//immediateRender: false,
					// autoAlpha: 0,
				},
				'-=1.2'
			);
		timeline
			.from(
				image2.current,
				1.2,
				{
					y: 200,
					ease: ease,
					opacity: 0,
					immediateRender: false,
					autoAlpha: 0,
				},
				'-=1'
			)
			.from(
				image2.current,
				1.7,
				{
					scale: 1.6,
					ease: ease,
					// immediateRender: false,
					// autoAlpha: 0,
				},
				'-=1.2'
			);
	}, [timeline, ease]);

	return (
		<section
			id='about'
			className=' flex flex-col md:flex-row md:mt-28 w-full min-h-screen'
		>
			{/* Hero About section */}
			<div className='flex flex-col mb-20 w-full h-full mt-12 lg:mt-0 md:mr-10  '>
				<h2 className='invisible font-[poppins] font-bold text-3xl' ref={h2Ref}>
					<span className='text-[#30D5C8]'>Hello.</span> WELCOME!
				</h2>
				<br />
				<p
					className='invisible font-mono tracking-widest mt-4 font-normal'
					ref={pRef}
				>
					A {'   '}
					<span
						className=' text-[#30D5C8] text-3xl font-mono font-black tracking-wider'
						ref={ele}
					></span>
				</p>
				<div className='mt-4 place-items-center'>
					<p className='text-xl tracking-wider leading-8 font-sans '>
						My name is{'  '}
						<span className='font-extrabold text-3xl text-[#30D5C8] uppercase font-mono'>
							Mark Okafor
						</span>
						{'  '}. I am a Nashville based Software Developer/Data Scientist
						with experience in Healthcare IT and Education, currently pursuing a
						PhD in Information Technology. Skilled in MERN stack, NextJS,
						NestJS, .NET CORE, GraphQL, and databases such as MongoDB, MySQL,
						POSTgres, and SQLite. Proficient in Python and familiar with machine
						learning tools including Scikit-learn, Tensorflow, and Keras.
					</p>
				</div>
				<button
					ref={btnRef}
					className=' invisible flex group items-center justify-center w-36 p-4 mt-5 font-sans border-0 bg-[#161616] hover:bg-[#30D5C8] hover:scale-105 hover:text-black rounded-lg text-white font-bold text-lg '
				>
					<a href='resume.pdf' download>
						Resume
					</a>

					<BsChevronCompactRight className='block ml-2 mt-1 transition-all group-hover:rotate-90' />
				</button>
			</div>

			{/* Hero Image section */}
			<div className='flex flex-col gap-4 w-full h-full xl:flex-row xl:justify-center'>
				<div
					className=' invisible bg-no-repeat bg-center w-[12.5rem] md:w-[18.75rem] lg:w-[28.125rem]'
					ref={image1}
				>
					<Image
						src={pic1}
						priority
						alt='picture of me'
						style={{
							width: '100%',
							backgroundSize: 'cover',
							objectFit: 'cover',
							border: '1px solid #30D5C8',
							borderRadius: '12px',
						}}
					/>
				</div>
				<div
					className=' invisible bg-no-repeat bg-center w-[12.5rem] md:w-[18.75rem] lg:w-[28.125rem] ml-auto md:ml-0  '
					ref={image2}
				>
					<Image
						src={pic2}
						priority
						alt='picture of me'
						style={{
							backgroundSize: 'cover',
							objectFit: 'cover',
							width: '100%',
							border: '1px solid #30D5C8',
							borderRadius: '12px',
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
