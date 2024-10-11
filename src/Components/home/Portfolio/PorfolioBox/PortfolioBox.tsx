import { PORTFOLIO_CONTENT_DB } from "@/graphql/PortfolioQuery";
import client from "../../../../../lib/apolloClient";
import { PortfolioSectionContentQuery } from "../../../../../lib/generated/graphql";

const PortfolioBox = async () => {
	const { data } = await client.query<PortfolioSectionContentQuery>({
		query: PORTFOLIO_CONTENT_DB,
	});

	const items = data.portfolio?.nodes;

	const getEmbedUrl = (url: string) => {
		const videoId = url.split("v=")[1];
		return `https://www.youtube.com/embed/${videoId}`;
	};

	return (
		<div className='w-full flex flex-col justify-center items-center py-8 md:w-[100%] mx-auto gap-10 lg:w-[90%] xl:w-[90%] 2xl:w-[80%] min-h-[80svh]'>
			{items?.map((item, index) => (
				<div
					key={item.portfoliofilms?.portfolioItemTitle}
					className={`w-full flex flex-col items-center md:w-3/4 mb-8`}
				>
					<div
						className={`flex flex-col-reverse items-center w-full md:flex-row ${
							index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
						}`}
					>
						<div
							className={`w-[300px]  bg-gray-500 flex justify-center items-center ${
								index % 2 === 0 ? "translate-x-[15px]" : "translate-x-[-15px]"
							} md:mr-4 `}
						>
							<iframe
								src={getEmbedUrl(item.portfoliofilms?.portfolioLink || "")}
								width={1000}
								height={1000}
								className={`max-w-[100%] h-[100%] mt-[30px] ${
									index % 2 === 0
										? "ml-[-30px] mb-[-30px] mr-[30px]"
										: "ml-[30px] mb-[-30px] mr-[-30px]"
								} shadow-black shadow-md`}
							/>
						</div>

						<h3 className='uppercase text-xl p-4 flex-shrink-0 min-w-[60%] md:w-4/5 max-w-[40%] text-center'>
							{item.portfoliofilms?.portfolioItemTitle}
						</h3>
					</div>
				</div>
			))}
		</div>
	);
};

export default PortfolioBox;
