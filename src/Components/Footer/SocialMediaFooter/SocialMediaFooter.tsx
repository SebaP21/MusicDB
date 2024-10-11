import { SOCIAL_MEDIA_LINKS_CONTENT_DB } from "@/graphql/SocialMediaQuery";
import client from "../../../../lib/apolloClient";
import { SocialMediaLinkItemsContentQuery } from "../../../../lib/generated/graphql";
import Link from "next/link";
import Image from "next/image";

import faceBookIcon from "../../../Assets/Icons/social-media (1).png";
import youTubeIcon from "../../../Assets/Icons/youtube (1).png";

const SocialMediaFooter = async () => {
	const { data } = await client.query<SocialMediaLinkItemsContentQuery>({
		query: SOCIAL_MEDIA_LINKS_CONTENT_DB,
	});

	const faceBookLink =
		data.linkiSpoEcznoCiowe?.nodes[1].socialMedia?.socialMediaLink;
	const youTubeLink =
		data.linkiSpoEcznoCiowe?.nodes[0].socialMedia?.socialMediaLink;

	return (
		<>
			<Link href={faceBookLink as string}>
				<Image
					src={faceBookIcon}
					alt={"facebook-icon"}
					width={50}
					height={50}
					className=' transition-all hover:scale-105'
				/>
			</Link>

			<Link href={youTubeLink as string}>
				<Image
					src={youTubeIcon}
					alt={"youtube-icon"}
					width={60}
					height={60}
					className=' transition-all hover:scale-105'
				/>
			</Link>
		</>
	);
};

export default SocialMediaFooter;
