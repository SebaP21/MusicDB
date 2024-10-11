import { LOGO_CONTENT_DB } from "@/graphql/LogoQuery";
import client from "../../../lib/apolloClient";
import { LogoContentQuery } from "../../../lib/generated/graphql";
import Image from "next/image";

const LogoFooter = async () => {
	const { data } = await client.query<LogoContentQuery>({
		query: LOGO_CONTENT_DB,
	});

	const footerLogo = data.allLogo?.nodes[0].logoBox?.logo_footer?.node;

	return (
		<>
			{footerLogo && (
				<Image
					src={footerLogo?.mediaItemUrl || ""}
					alt={footerLogo?.altText || ""}
					width={400}
					height={400}
                    className="max-w-[30svh]"
				/>
			)}
		</>
	);
};

export default LogoFooter;
