import { LOGO_CONTENT_DB } from "@/graphql/LogoQuery";
import client from "../../../lib/apolloClient";
import { LogoContentQuery } from "../../../lib/generated/graphql";
import Image from "next/image";

const LogoNav = async () => {
	const { data } = await client.query<LogoContentQuery>({
		query: LOGO_CONTENT_DB,
	});

	const navLogo = data.allLogo?.nodes[0].logoBox?.logoNav?.node;

	return (
		<>
			{navLogo && (
				<Image
					src={navLogo?.mediaItemUrl || ""}
					alt={navLogo?.altText || ""}
					width={400}
					height={400}
				/>
			)}
		</>
	);
};

export default LogoNav;
