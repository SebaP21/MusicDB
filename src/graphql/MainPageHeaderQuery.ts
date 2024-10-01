import { gql } from "@apollo/client";

export const MAIN_PAGE_CONTENT_DB = gql`
	query HomePageHeaderContent {
		pageBy(pageId: 12) {
			mainPageHeader {
				logoHeader {
					node {
						altText
						mediaItemUrl
						title(format: RENDERED)
						slug
					}
				}
				pageTitle
				homeHeaderPicture {
					node {
						altText
						mediaItemUrl
						title(format: RENDERED)
						slug
					}
				}
			}
		}
	}
`;
