import { OFFER_LINKS_CONTENT_DB } from "@/graphql/OfferLinksQuery";
import client from "../../../../../lib/apolloClient";
import { OfferLinksContentQuery } from "../../../../../lib/generated/graphql";

export type OfferLink = {
  __typename?: "Oferta";
  title?: string | null;
  slug?: string | null;
};

export const fetchOfferLinks = async (): Promise<OfferLink[]> => {
  const { data } = await client.query<OfferLinksContentQuery>({
    query: OFFER_LINKS_CONTENT_DB,
  });

  return data.allOferta?.nodes || [];
};
