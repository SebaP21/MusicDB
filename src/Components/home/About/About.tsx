import { ABOUT_CONTENT_DB } from "@/graphql/AboutQuery";
import client from "../../../../lib/apolloClient";
import { AboutSectionContentQuery } from "../../../../lib/generated/graphql";
import styles from "./about.module.css";
import Image from "next/image";

const About = async () => {
	const { data } = await client.query<AboutSectionContentQuery>({
		query: ABOUT_CONTENT_DB,
	});

	const image = data.pageBy?.aboutDescription?.pictureAbout?.node;
	const aboutDescription = data.pageBy?.aboutDescription?.aboutMeDescription;

	return (
		<section className='w-full h-[90svh] flex justify-center items-center bg-white'>
			<div className={styles.imageBackground}>
				<div className='w-[50%] flex justify-center bg-gray-600 '>
					<Image
						src={image?.mediaItemUrl || ""}
						alt={image?.altText || "alt"}
						width={800}
						height={800}
						className='object-contain mt-[30px] ml-[30px] mb-[-30px] mr-[-30px]'
					/>
				</div>
			</div>

			<article className='w-[40%] p-4'>
				<h2 className='text-2xl font-bold mb-4 text-gray-900'>O mnie</h2>
				<div className='w-[15%] h-[2px] bg-orange-300 mb-4'></div>
				<p className='text-gray-800'>{aboutDescription}</p>
			</article>
		</section>
	);
};

export default About;
