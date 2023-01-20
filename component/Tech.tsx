import Image, { StaticImageData } from 'next/image';

interface TechProps {
	src: StaticImageData;
	name: string;
}

const Tech = ({ src, name }: TechProps) => {
	return (
		<div
			className={` bg-[#242424] shadow-md shadow-[#040c16] hover:scale-110 hover:border hover:rounded-lg hover:border-1 hover:border-[#30D5C8] duration-500`}
		>
			<Image
				className='w-20 mx-auto pt-3'
				src={src}
				alt={`${name} tech logo`}
				priority
			/>
			<p className='my-4'>{name}</p>
		</div>
	);
};

export default Tech;
