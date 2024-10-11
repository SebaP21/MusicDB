import { gql } from "@apollo/client";

export const OFFER_LINKS_CONTENT_DB = gql`
	query OfferLinksContent {
		allOferta {
			nodes {
				title(format: RENDERED)
				slug
			}
		}
	}
`;
