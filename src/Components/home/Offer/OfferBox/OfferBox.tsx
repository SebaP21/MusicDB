import { OFFER_CONTENT_DB } from "@/graphql/OfferQuery";
import client from "../../../../../lib/apolloClient";
import { OfferSectionQueryQuery } from "../../../../../lib/generated/graphql";
import styles from "./offer-box.module.css";

const OfferBox = async () => {
	const { data } = await client.query<OfferSectionQueryQuery>({
		query: OFFER_CONTENT_DB,
	});

	const title = data.allOferta?.nodes;

	return (
		<div>
			<h3>Wychodząc naprzeciw oczekiwaniom oferuje Państwu</h3>
			<div className={styles.break}></div>
			<div className={styles.offerBox}>
				{title?.map((offerCard) => (
					<div
						className={styles.offerCardItem}
						key={offerCard.offerCardItem?.homeOfferHeader}
					>
						<h4>{offerCard.offerCardItem?.homeOfferHeader}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default OfferBox;
