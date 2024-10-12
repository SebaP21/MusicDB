import NavDesktop from "@/Components/Nav/NavDesktop/NavDesktop";
import NavMobile from "@/Components/Nav/NavMobile/NavMobile";
import { fetchOfferLinks } from "@/Components/Nav/NavLinks/NavOfferLinks/OfferLinksFetcher";

export const Nav = async () => {
  const offers = await fetchOfferLinks();

  return (
    <>
      <NavDesktop offers={offers} />
      <NavMobile offers={offers} />
    </>
  );
};
