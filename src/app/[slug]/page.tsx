import { OFFER_PAGE_DYNAMIC_CONTENT_DB } from "@/graphql/OfferPageDynamicQuery";
import client from "../../../lib/apolloClient";
import { OfferPageDynamicContentQuery } from "../../../lib/generated/graphql";
import OfferHeader from "@/Components/offer/OfferHeader/OfferHeader";
import OfferDescription from "@/Components/offer/OfferDescription/OfferDescription";

type OfferPageProps = {
	params: {
		slug: string;
	};
};

const Page = async ({ params }: OfferPageProps) => {
	const { slug } = params;

	const { data } = await client.query<OfferPageDynamicContentQuery>({
		query: OFFER_PAGE_DYNAMIC_CONTENT_DB,
		variables: { slug },
	});

	const offerCardItem = data?.ofertaBy?.offerCardItem;
	const offerDescription = offerCardItem?.offerDescription || "";
	const offerImage = offerCardItem?.offerPicture?.node.mediaItemUrl || "";
	const offerImageAlt = offerCardItem?.offerPicture?.node.altText || "";
	const videoLink = offerCardItem?.offerVideo || "";
	const headerTitle = offerCardItem?.homeOfferHeader ||""

	return (
		<>
			{offerCardItem && (
				<>
					<OfferHeader
						backgroundImage={
							offerCardItem.offerHeaderPicture?.node.mediaItemUrl || ""
						}
						headerTitle={offerCardItem.offerHeaderTitle || ""}
					/>
					<OfferDescription
						description={offerDescription}
						imageUrl={offerImage}
						imageAlt={offerImageAlt}
						video={videoLink}
						title={headerTitle}
					/>
				</>
			)}
		</>
	);
};

export default Page;
