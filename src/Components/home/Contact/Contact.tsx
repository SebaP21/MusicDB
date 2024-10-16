import { CONTACT_CONTENT_DB } from "@/graphql/ContactQuery";
import client from "../../../../lib/apolloClient";
import { ContactSectionContentQuery } from "../../../../lib/generated/graphql";
import ContactForm from "./ContactForm/ContactForm";
import Image from "next/image";

import telIcon from "../../../Assets/Icons/phone-call.png";
import mailIcon from "../../../Assets/Icons/email (1).png";
import Link from "next/link";

const Contact = async () => {
	const { data } = await client.query<ContactSectionContentQuery>({
		query: CONTACT_CONTENT_DB,
	});

	const backgroundImage =
		data.pageBy?.contactSection?.contactBackgroundImage?.node.mediaItemUrl;

	const tel = data.pageBy?.contactSection?.phoneNumber;
	const email = data.pageBy?.contactSection?.eMailAdress;

	return (
		<section
			id='contact'
			className='relative w-full min-h-[100svh] bg-cover bg-fixed bg-right flex justify-center items-center py-10'
			style={{
				backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
			}}
		>
			<div className='relative w-[90%] min-h-[80svh] text-white z-10 flex flex-col justify-evenly items-center text-center bg-black bg-opacity-40 p-8 '>
				<h3 className='text-5xl uppercase text-orange-400'>Kontakt</h3>
				<div className='2xl:flex flex-row gap-10 '>
					<div className='flex flex-col gap-8'>
						<p className='mt-5'>
							Zadzwoń lub skorzystaj z formularza kontaktowego i wyślij
							wiadomość
						</p>

						<Link 
						href={`mailto:${email}`}
						>
							<div className='flex flex-col justify-center items-center cursor-pointer min-h-[15svh] gap-3 transition-all hover:scale-105'>
								<Image
									src={mailIcon}
									alt={"mail-icon"}
									width={70}
									height={70}
								/>
								<h5 className='uppercase'>Adres e-mail</h5>
								<h6 className='text-orange-400 text-bold '>{email}</h6>
							</div>
						</Link>

						<Link href={`tel:${tel}`}>
							<div className='flex flex-col justify-center items-center cursor-pointer min-h-[15svh] gap-3 transition-all hover:scale-105'>
								<Image
									src={telIcon}
									alt={"phone-icon"}
									width={70}
									height={70}
								/>
								<h5 className='uppercase'>Numer telefonu</h5>
								<h6 className='text-orange-400 text-bold'>{tel}</h6>
							</div>
						</Link>
					</div>

					<ContactForm />
				</div>
			</div>
			<div className='absolute inset-0 bg-black opacity-70'></div>
		</section>
	);
};

export default Contact;
