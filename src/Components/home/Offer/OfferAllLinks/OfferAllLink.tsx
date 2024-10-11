import { OFFER_LINKS_CONTENT_DB } from "@/graphql/OfferLinksQuery";
import client from "../../../../../lib/apolloClient";
import { OfferLinksContentQuery } from "../../../../../lib/generated/graphql";
import Link from "next/link";

const OfferAllLinks = async () => {
	const { data } = await client.query<OfferLinksContentQuery>({
		query: OFFER_LINKS_CONTENT_DB,
	});

	const title = data.allOferta?.nodes || [];

	return (
		<>
			{title?.map((offerCard) => (
				<Link
					href={`/${offerCard.slug}`}
					key={offerCard.slug}
				>
					<div className=' border-[2px] border-white min-h-[10svh] rounded  flex items-center justify-center p-4 hover:scale-105 cursor-pointer transition-all  '>
						<h4>{offerCard.title}</h4>
					</div>
				</Link>
			))}
		</>
	);
};

export default OfferAllLinks;
