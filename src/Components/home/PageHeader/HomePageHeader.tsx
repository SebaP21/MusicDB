import client from "../../../../lib/apolloClient";

import Image from "next/image";
import { HomePageHeaderContentQuery } from "../../../../lib/generated/graphql";
import { MAIN_PAGE_CONTENT_DB } from "@/graphql/MainPageHeaderQuery";

const HomePageHeader = async () => {
	const { data } = await client.query<HomePageHeaderContentQuery>({
		query: MAIN_PAGE_CONTENT_DB,
	});

	const logo = data.pageBy?.mainPageHeader?.logoHeader?.node;
	const pageTitle = data.pageBy?.mainPageHeader?.pageTitle;
	const heroImage = data.pageBy?.mainPageHeader?.homeHeaderPicture?.node;

	return (
		<header className='w-full h-[100svh] flex flex-col justify-center  bg-black '>
			<div className="order-2 flex flex-col justify-center items-center"
			>
				<Image
					src={logo?.mediaItemUrl || ""}
					alt={logo?.altText || ""}
					width={150}
					height={150}
				/>
				<h1 className='text-3xl text-center px-3 text-white uppercase '>
					{pageTitle}
				</h1>
				<div className='w-[40%] h-[2px] mt-7 bg-orange-400'></div>
			</div>
			<div
				className='w-full h-[60svh] bg-center bg-cover order-1'
				style={{
					backgroundImage: heroImage?.mediaItemUrl
						? `url(${heroImage.mediaItemUrl})`
						: "none",
				}}
			></div>
		</header>
	);
};

export default HomePageHeader;
