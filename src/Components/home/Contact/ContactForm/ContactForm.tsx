"use client";

import { error } from "console";
import { useState } from "react";

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [status, setStatus] = useState<string | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = new FormData();
		form.append("your-name", formData.name);
		form.append("your-email", formData.email);
		form.append("your-phone", formData.phone);
		form.append("your-message", formData.message);
		form.append("_wpcf7", "11");
		form.append("_wpcf7_unit_tag", "wpcf7-f11-p20-o1");
		form.append("_wpcf7_version", "5.7.2");

		try {
			const response = await fetch(
				process.env.NEXT_PUBLIC_WP_CONTACT_FORM_URL as string,
				{
					method: "POST",
					body: form,
				}
			);

			const result = await response.json();

			if (response.ok) {
				setStatus("Wiadomość została wysłana pomyślnie!");
			} else {
				setStatus(`Błąd: ${result.message}`);
			}
		} catch (error) {
			setStatus("Wystąpił błąd podczas wysyłania wiadomości.");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='min-w-[100%] min-h-[30svh] flex flex-col gap-5 mt-10 text-black 2xl:min-w-[50%] max-w-[50%] justify-between '
		>
			<div className=''>
				<input
					className='w-full p-2'
					type='text'
					id='name'
					name='name'
					value={formData.name}
					onChange={handleChange}
					required
					placeholder='Imię i nazwisko'
				/>
			</div>
			<div>
				<input
					className='w-full p-2'
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					required
					placeholder='Adres e-mail'
				/>
			</div>
			<div>
				<input
					className='w-full p-2'
					type='tel'
					id='phone'
					name='phone'
					value={formData.phone}
					onChange={handleChange}
					placeholder='Telefon kontaktowy'
				/>
			</div>
			<div>
				<textarea
					className='w-full min-h-[10svh] max-h-[10svh] p-2'
					id='message'
					name='message'
					value={formData.message}
					onChange={handleChange}
					required
					placeholder='Wiadomość'
				/>
			</div>
			<button
				className='w-full transition-colors bg-orange-400 p-3 uppercase hover:bg-white hover:text-black'
				type='submit'
			>
				Wyślij
			</button>
			{status && <p className='text-white '>{status}</p>}
		</form>
	);
};

export default ContactForm;
