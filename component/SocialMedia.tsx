interface ContactProp {
	name: string;
	title: string;
	value: string;
	link: string;
	icon: React.ReactElement;
}

const SocialMedia = ({ name, title, value, link, icon }: ContactProp) => {
	return (
		<article className=' bg-[#30D5C8] py-4 px-12 space-y-4 w-[320px]  border-2 border-transparent rounded-lg text-center hover:bg-[#242424] hover:border-[#30D5C8] hover:scale-105  '>
			<div className='flex text-2xl justify-center items-center'>{icon}</div>
			<h4 className='capitalize text-base'>{name}</h4>
			<h4 className='text-base'>{title}</h4>
			<a
				href={link}
				target='_blank'
				rel='noreferrer'
				className='capitalize text-lg inline-block mb-4'
			>
				{value}
			</a>
		</article>
	);
};

export default SocialMedia;
