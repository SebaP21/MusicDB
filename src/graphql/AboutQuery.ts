import { gql } from "@apollo/client";

export const ABOUT_CONTENT_DB = gql`
	query AboutSectionContent {
		pageBy(pageId: 14) {
			aboutDescription {
				aboutMeDescription
				pictureAbout {
					node {
						altText
						mediaItemUrl
						title
						slug
					}
				}
			}
		}
	}
`;
