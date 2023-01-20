import ContactForm from '../../component/ContactForm';
import SocialMedia from '../../component/SocialMedia';
import { contactData } from '../../data/data';

const Contact = () => {
	return (
		<section
			id='contacts'
			className='flex flex-col w-full min-h-screen items-center mt-12 px-6'
		>
			<h1 className='text-center mb-8'>Get in touch</h1>

			<div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center w-full py-4'>
				<div className='flex flex-col md:flex-row md:flex-wrap w-full gap-4 justify-center items-center'>
					{contactData.map(({ id, name, title, value, link, icon }) => (
						<SocialMedia
							key={id}
							name={name}
							title={title}
							value={value}
							link={link}
							icon={icon}
						/>
					))}
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
