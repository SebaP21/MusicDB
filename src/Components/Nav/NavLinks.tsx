import { NAV_LINKS_CONTENT_DB } from "@/graphql/NavLinksQuery";
import client from "../../../lib/apolloClient";
import { NavLinksContentQuery } from "../../../lib/generated/graphql";
import Link from "next/link";

const NavLinks = async () => {
	const { data } = await client.query<NavLinksContentQuery>({
		query: NAV_LINKS_CONTENT_DB,
	});

	return (
		<>
			{data.pages?.nodes.map((link) => (
				<Link
					href={`/${link.slug}`}
					key={link.slug}
				>
					{link.title}
				</Link>
			))}
		</>
	);
};


export default NavLinks