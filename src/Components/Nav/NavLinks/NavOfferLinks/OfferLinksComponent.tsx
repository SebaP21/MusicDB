"use client";

import Link from "next/link";
import { useOfferLinkContext } from "./OfferLinksContext";
import { FC } from "react";

type LinkProps = {
	onClick: () => void;
};

const OfferLinkComponent: FC<LinkProps> = ({ onClick }) => {
	const { value } = useOfferLinkContext();

	return (
		<>
			{value.length > 0 ? (
				value.map((offer) => (
					<Link
						onClick={onClick}
						href={`/${offer.slug}`}
						key={offer.slug}
						className='px-2 transition-colors hover:text-orange-400 '
					>
						<div>
							<h5>{offer.title}</h5>
						</div>
					</Link>
				))
			) : (
				<div>
					<p>Ładowanie...</p>
				</div>
			)}
		</>
	);
};

export default OfferLinkComponent;
