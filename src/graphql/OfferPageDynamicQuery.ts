import { gql } from "@apollo/client";

export const OFFER_PAGE_DYNAMIC_CONTENT_DB = gql`
	query OfferPageDynamicContent($slug: String!) {
		ofertaBy(slug: $slug) {
			offerCardItem {
				homeOfferHeader
				offerDescription
				offerHeaderPicture {
					node {
						altText
						mediaItemUrl
						slug
						title(format: RENDERED)
					}
				}
				offerHeaderTitle
				offerPicture {
					node {
						altText
						mediaItemUrl
						title(format: RENDERED)
						slug
					}
				}
				offerVideo
			}
		}
	}
`;
