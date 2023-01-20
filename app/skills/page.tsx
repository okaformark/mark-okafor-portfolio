'use client';

import Tech from '../../component/Tech';
import { techData } from '../../data/data';

const Skills = () => {
	return (
		<section id='skills' className=' min-h-screen w-full mt-12 text-gray-300 '>
			<div>
				<h1 className='text-center mb-4'>Skills</h1>
			</div>

			<div className=' w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 text-center py-8 px-4 max-h-screen'>
				{techData?.map(({ id, src, name }) => (
					<Tech key={id} src={src} name={name} />
				))}
			</div>
		</section>
	);
};

export default Skills;
