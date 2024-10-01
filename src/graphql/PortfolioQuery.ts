import { gql } from "@apollo/client";

export const PORTFOLIO_CONTENT_DB = gql`
	query PortfolioSectionContent {
		portfolio {
			nodes {
				portfoliofilms {
					portfolioItemTitle
					portfolioLink
				}
			}
		}
	}
`;
