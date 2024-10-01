import { FC } from "react";
import styles from "./contact-items.module.css";

type ContactItemsProps = {
	props: string | null | undefined;
};

export const ContactItems: FC<ContactItemsProps> = ({ props }) => {
	return (
		<div className={styles.wrapper}>
			<p>ICON</p>
			<h5>Adres e-mail</h5>
			<p>{props}</p>
		</div>
	);
};
