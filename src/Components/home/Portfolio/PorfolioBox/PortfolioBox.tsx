import { PORTFOLIO_CONTENT_DB } from "@/graphql/PortfolioQuery";
import client from "../../../../../lib/apolloClient";
import { PortfolioSectionContentQuery } from "../../../../../lib/generated/graphql";

import styles from "./portfolio-box.module.css";

const PortfolioBox = async () => {
	const { data } = await client.query<PortfolioSectionContentQuery>({
		query: PORTFOLIO_CONTENT_DB,
	});

	const items = data.portfolio?.nodes;

	return (
		<div className={styles.contentWrapper}>
			{items?.map((item) => (
				<div
					className={styles.itemWrapper}
					key={item.portfoliofilms?.portfolioItemTitle}
				>
					<div className={styles.videoWrapper}>
						<iframe src={item.portfoliofilms?.portfolioLink || ""} />
					</div>
					<h3>{item.portfoliofilms?.portfolioItemTitle}</h3>
				</div>
			))}
		</div>
	);
};

export default PortfolioBox;
