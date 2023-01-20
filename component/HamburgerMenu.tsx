import { Turn as Hamburger } from 'hamburger-react';
import { Dispatch, SetStateAction } from 'react';

interface HamburgerProps {
	toggled: boolean;
	toggle: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu = ({ toggled, toggle }: HamburgerProps) => {
	return (
		<div className='hover:text-[#30D5C8]'>
			<Hamburger
				hideOutline={false}
				label='hamburger menu'
				size={30}
				toggled={toggled}
				toggle={toggle}
				direction='right'
				duration={0.5}
				distance='lg'
				easing='ease-in'
			/>
		</div>
	);
};

export default HamburgerMenu;
