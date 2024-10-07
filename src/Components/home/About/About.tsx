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
		<section className='w-full flex flex-col justify-center items-center bg-white'>
			<div className="mb-8 translate-x-[-15px] ">
				<div className='w-[80%] flex bg-gray-600 mt-8 mx-auto '>
					<Image
						src={image?.mediaItemUrl || ""}
						alt={image?.altText || "alt"}
						width={800}
						height={800}
						className='object-contain mt-[30px] ml-[30px] mb-[-30px] mr-[-30px] shadow-black shadow-md'
					/>
				</div>
			</div>

			<article className='w-[90%] pt-5 px-1 pb-5'>
				<h2 className='text-xl font-bold mb-3 text-gray-900'>O mnie</h2>
				<div className='w-[15%] h-[2px] bg-orange-300 mb-4 '></div>
				<p className='text-gray-800'>{aboutDescription}</p>
			</article>
		</section>
	);
};

export default About;
