import { gql } from "@apollo/client";

export const LOGO_CONTENT_DB = gql`
	query LogoContent {
		allLogo {
			nodes {
				logoBox {
					logoNav {
						node {
							altText
							mediaItemUrl
							slug
							title(format: RENDERED)
						}
					}
					logo_footer {
						node {
							altText
							mediaItemUrl
							slug
							title(format: RENDERED)
						}
					}
				}
			}
		}
	}
`;
