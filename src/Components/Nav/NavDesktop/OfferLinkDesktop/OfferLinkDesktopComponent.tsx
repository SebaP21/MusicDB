import Link from "next/link";

import { FC } from "react";
import { OfferLink } from "@/Components/Nav/NavLinks/NavOfferLinks/OfferLinksFetcher";

type LinkProps = {
  onClick: () => void;
  offers: OfferLink[];
};

const OfferLinkDesktopComponent: FC<LinkProps> = ({ onClick, offers }) =>
  offers.map((offer) => (
    <Link
      onClick={onClick}
      href={`/${offer.slug}`}
      key={offer.slug}
      className="block px-4 py-2 hover:bg-orange-400"
    >
      <div>
        <h5>{offer.title}</h5>
      </div>
    </Link>
  ));

export default OfferLinkDesktopComponent;
