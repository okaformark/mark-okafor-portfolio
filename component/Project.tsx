import Image, { StaticImageData } from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

interface ProjectProp {
	title: string;
	backgroundImage: StaticImageData;
	tech: string;
	projectUrl: string;
	demoUrl?: string;
	category?: string[];
}

const Project = ({
	title,
	backgroundImage,
	tech,
	projectUrl,
	demoUrl,
}: ProjectProp) => {
	return (
		<div className='relative bg-[#242424] flex items-center justify-center h-full shadow-md shadow-gray-700 rounded-xl group hover:bg-gradient-to-r from-[#30D5C8] to-[#bee9e5]'>
			<Image
				className='rounded-xl group-hover:opacity-10 py-4 '
				src={backgroundImage}
				priority
				alt={title}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					aspectRatio: 1 / 1,
					borderRadius: '12px',
				}}
			/>
			<div className='group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-h-fit'>
				<div className='flex flex-col items-center justify-center h-full py-2 w-full'>
					<h3 className=' place-items-center text-2xl text-white tracking-wider text-center mt-4 font-bold font-mono'>
						{title}
					</h3>
					<p className='place-items-center pb-2 pt-1 text-center font-bold text-white'>
						{tech}
					</p>

					<a
						href={projectUrl}
						className=' flex items-center justify-center px-4 py-2 mb-4 rounded-lg group bg-white cursor-pointer hover:ring-offset-2 hover:ring-2 hover:focus:ring-2 hover:ring-[#30D5C8]'
						target='_blank'
						rel='noreferrer'
					>
						<p className='text-center text-gray-700 font-bold text-lg '>
							Github
						</p>
						<FiArrowRight className='ml-2 text-xl text-black transition-all group-hover:scale-105 group-hover:animate-bounce' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
