import { gql } from "@apollo/client";

export const SOCIAL_MEDIA_LINKS_CONTENT_DB = gql`
	query SocialMediaLinkItemsContent {
		linkiSpoEcznoCiowe {
			nodes {
				socialMedia {
					socialMediaLink
				}
			}
		}
	}
`;
