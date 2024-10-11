import { gql } from "@apollo/client";

export const OFFER_CONTENT_DB = gql`
	query OfferSectionQuery {
		allOferta {
			nodes {
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
				slug
				title(format: RENDERED)
			}
		}
	}
`;
