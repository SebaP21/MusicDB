import { gql } from "@apollo/client";

export const NAV_LINKS_CONTENT_DB = gql`
	query NavLinksContent {
		pages {
			nodes {
				title(format: RENDERED)
				slug
			}
		}
	}
`;
