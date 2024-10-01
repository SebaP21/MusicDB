import { CONTACT_CONTENT_DB } from "@/graphql/ContactQuery";
import client from "../../../../lib/apolloClient";
import { ContactSectionContentQuery } from "../../../../lib/generated/graphql";
import { ContactItems } from "./ContactItems/ContactItems";
import styles from "./contact.module.css";
import ContactForm from "./ContactForm/ContactForm";

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
			style={{
				backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
			}}
		>
			<div className={styles.sectionWrapper}>
				<h3>Kontakt</h3>
				<div className={styles.contactBox}>
					<div className={styles.contactInfo}>
						<p>
							Zadzwoń lub skorzystaj z formularza kontaktowego i wyślij
							wiadomość
						</p>
						<ContactItems props={email} />
						<ContactItems props={tel} />
					</div>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};


export default Contact
