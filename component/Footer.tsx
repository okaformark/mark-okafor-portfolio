import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className='py-2 text-center'>
			<a href='/' className='footer__logo font-medium mb-2 inline-block'>
				<h2 className='font-mono text-lg'>Mark Okafor</h2>
			</a>
			<ul className='flex flex-wrap justify-center gap-8 mx-auto mb-2'>
				<li>
					<Link href='/about'>
						<h4 className=''>About</h4>
					</Link>
				</li>
				<li>
					<Link href='/skills'>
						<h4 className=''>Skills</h4>
					</Link>
				</li>
				<li>
					<Link href='/projects'>
						<h4 className=''>Projects</h4>
					</Link>
				</li>
				<li>
					<Link href='/contacts'>
						<h4 className=''>Contacts</h4>
					</Link>
				</li>
			</ul>

			<div className='footer__socials flex justify-center gap-4 mb-2 '>
				<a
					href='http://facebook.com'
					className=' flex bg-gray-700 text-xl p-4 text-white rounded-xl hover:bg-transparent hover:text-black '
				>
					<BsFacebook />
				</a>
				<a
					href='http://instagram.com'
					className=' flex bg-gray-700 text-xl p-4 text-white rounded-xl hover:bg-transparent hover:text-black '
				>
					<BsInstagram />
				</a>
				<a
					href='http://twitter.com'
					className=' flex bg-gray-700 text-xl  p-4 text-white rounded-xl hover:bg-transparent hover:text-black '
				>
					<BsTwitter />
				</a>
			</div>
			<div className=' mb-2 text-black font-semibold tracking-widest leading-4'>
				<small>
					<span className='text-base font-bold uppercase'>&copy;</span> Mark
					Okafor. All rights reserved.
				</small>
			</div>
		</footer>
	);
};

export default Footer;
