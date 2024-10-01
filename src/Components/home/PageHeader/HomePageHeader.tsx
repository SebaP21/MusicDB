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
		<header className='w-full h-[100svh] flex justify-center items-center bg-black '>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "30%",
					gap: "1.5em",
				}}
			>
				<Image
					src={logo?.mediaItemUrl || ""}
					alt={logo?.altText || ""}
					width={300}
					height={300}
				/>
				<h1 className='text-xl md:text-2xl lg:text-4xl text-center p-2'>
					{pageTitle}
				</h1>
				<div className='w-[40%] h-[2px] bg-orange-400 mt-2'></div>
			</div>
			<div
				className='min-w-[70%] h-[100svh] bg-center bg-cover'
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
