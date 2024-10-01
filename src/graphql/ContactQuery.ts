import { gql } from "@apollo/client";

export const CONTACT_CONTENT_DB = gql`
	query ContactSectionContent {
		pageBy(pageId: 20) {
			contactSection {
				eMailAdress
				phoneNumber
				contactBackgroundImage {
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
