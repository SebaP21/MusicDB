import client from "../../../../lib/apolloClient";

import Image from "next/image";
import { HomePageHeaderContentQuery } from "../../../../lib/generated/graphql";
import { MAIN_PAGE_CONTENT_DB } from "@/graphql/MainPageHeaderQuery";
import Link from "next/link";

import arrowDownIcon from "../../../Assets/Icons/down-arrow.png";

const HomePageHeader = async () => {
	const { data } = await client.query<HomePageHeaderContentQuery>({
		query: MAIN_PAGE_CONTENT_DB,
	});

	const logo = data.pageBy?.mainPageHeader?.logoHeader?.node;
	const pageTitle = data.pageBy?.mainPageHeader?.pageTitle;
	const heroImage = data.pageBy?.mainPageHeader?.homeHeaderPicture?.node;

	return (
		<>
			<header className='w-full h-[100svh] max-h-[100svh] flex flex-col justify-center  bg-black overflow-hidden xl:hidden'>
				<div className='order-2 flex flex-col items-center min-h-[10svh] justify-evenly z-10 mt-[-190px]'>
					<h1 className='relative text-3xl text-center px-3 text-white uppercase '>
						{pageTitle}
					</h1>
					<div className='w-[40%] h-[1px] mt-10 bg-orange-400'></div>
					<Link
						href={"#about"}
						className='mt-10'
					>
						<Image
							src={arrowDownIcon}
							alt={"arrow-down-icon"}
							width={40}
							height={40}
						/>
					</Link>
				</div>
				<div
					className='w-full h-[80svh] bg-center bg-cover order-1 animate-zoom mt-[-100px] md:bg-y-20  '
					style={{
						backgroundImage: heroImage?.mediaItemUrl
							? `url(${heroImage.mediaItemUrl})`
							: "none",
					}}
				></div>
			</header>
			<header className="hidden w-full overflow-hidden xl:flex">
				<div
				className="min-w-[40%] max-w-[40%] h-[90svh] bg-black text-white flex justify-center items-end z-10 2xl:max-w-[50%] 2xl:min-w-[50%]"
				>
					<div className="h-[90%] flex flex-col items-center justify-evenly">
						<div>
							<Image
								src={logo?.mediaItemUrl || ""}
								alt={logo?.altText || "alt"}
								width={300}
								height={300}
							/>
						</div>
						<h1 className="text-3xl uppercase text-center max-w-[90%] px-4 2xl:max-w-[70%]">{pageTitle}</h1>
						<div className='w-[40%] h-[1px] mt-10 bg-orange-400'></div>
						<Link
							href={"#about"}
							className='mt-10'
						>
							<Image
								src={arrowDownIcon}
								alt={"arrow-down-icon"}
								width={40}
								height={40}
							/>
						</Link>
					</div>
				</div>
				<div
					className="w-full  bg-y-20 bg-cover animate-zoom "
					style={{
						backgroundImage: heroImage?.mediaItemUrl
							? `url(${heroImage.mediaItemUrl})`
							: "none",
					}}
				></div>
			</header>
		</>
	);
};

export default HomePageHeader;
