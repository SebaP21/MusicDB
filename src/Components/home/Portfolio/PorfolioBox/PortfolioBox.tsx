import { PORTFOLIO_CONTENT_DB } from "@/graphql/PortfolioQuery";
import client from "../../../../../lib/apolloClient";
import { PortfolioSectionContentQuery } from "../../../../../lib/generated/graphql";

import styles from "./portfolio-box.module.css";

const PortfolioBox = async () => {
	const { data } = await client.query<PortfolioSectionContentQuery>({
		query: PORTFOLIO_CONTENT_DB,
	});

	const items = data.portfolio?.nodes;

	const getEmbedUrl = (url: string) => {
		const videoId = url.split("v=")[1]; // Pobieramy ID filmu z URL
		return `https://www.youtube.com/embed/${videoId}`;
	};

	return (
		<div className='w-full flex flex-col justify-center items-center py-5'>
			{items?.map((item) => (
				<>
					<h3 className='uppercase text-xl text-center p-4'>
						{item.portfoliofilms?.portfolioItemTitle}
					</h3>
					<div
						className=''
						key={item.portfoliofilms?.portfolioItemTitle}
					>
						<div className='w-[300px] flex bg-gray-600 mb-8 translate-x-[-15px]'>
							<iframe
								src={getEmbedUrl(item.portfoliofilms?.portfolioLink || "")}
								width={300}
								height={300}
								className='mt-[30px] ml-[30px] mb-[-30px] mr-[-30px] shadow-black shadow-md'
							/>
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default PortfolioBox;
