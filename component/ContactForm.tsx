'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID!,
				process.env.NEXT_PUBLIC_TEMPLATE_ID!,
				form.current!,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};
	return (
		<form
			className='flex flex-col gap-6 justify-center'
			ref={form}
			onSubmit={sendEmail}
		>
			<input type='text' name='name' placeholder='Mark Okafor...' required />
			<input
				type='email'
				name='email'
				placeholder='okaformark@gmail.com'
				required
			/>
			<textarea
				name='message'
				placeholder='Type Something...'
				required
				rows={7}
				cols={50}
			></textarea>
			<button
				type='submit'
				className='capitalize w-full text-xl p-4 font-sans border-0 bg-[#161616] hover:bg-[#30D5C8] hover:scale-105 hover:text-black rounded-lg text-white font-bold '
			>
				send
			</button>
		</form>
	);
};

export default ContactForm;
