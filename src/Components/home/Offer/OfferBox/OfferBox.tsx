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
		<div className='relative bg-black bg-opacity-50 text-white  w-[90%] min-h-[70svh] flex flex-col items-center uppercase p-5'>
			<h3 className='relative text-xl text-center p-3 font-bold '>
				Wychodząc naprzeciw oczekiwaniom oferuje Państwu
			</h3>
			<div className='w-[50%] h-[2px] bg-orange-300 mb-3 '></div>
			<div className='min-h-[60svh] flex flex-col text-center justify-evenly'>
				{title?.map((offerCard) => (
					<div
						className=' border-[2px] border-white min-h-[10svh] rounded  flex items-center justify-center p-4 hover:scale-105 cursor-pointer transition-all  '
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
