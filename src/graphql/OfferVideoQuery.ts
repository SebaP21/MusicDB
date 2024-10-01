import { gql } from "@apollo/client";

export const OFFERBACKGROUND_CONTENT_DB = gql`
	query OfferBackgroundVideo {
		pageBy(pageId: 16) {
			offer {
				backgroundVideoLink
			}
		}
	}
`;
