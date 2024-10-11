import { FC } from "react";
import Image from "next/image";

type OfferDescriptionProps = {
	description: string;
	imageUrl: string;
	imageAlt: string;
	title:string
	video?: string;
};

const OfferDescription: FC<OfferDescriptionProps> = ({
	description,
	imageUrl,
	imageAlt,
	video,
	title
}) => {
	const getEmbedUrl = (url: string) => {
		const videoId = url.split("v=")[1];
		return `https://www.youtube.com/embed/${videoId}`;
	};

	return (
		<section className='w-full flex flex-col justify-center items-center'>
			<article className='w-[90%] flex flex-col justify-center items-center lg:flex-row py-10 lg:justify-evenly lg:items-start xl:items-center'>
				<div className=' mb-5 lg:max-w-[40%] lg:my-0 lg:mb-0 lg:flex flex-col '>
					<h1 className="hidden lg:block uppercase text-2xl text-center mb-10 xl:text-start" >{title}</h1>
					<p>
						{description} Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Tempora nesciunt quod sint distinctio, id in similique labore
						quibusdam totam soluta delectus numquam iste. Nulla voluptates
						totam, voluptas rerum ut maxime quo ea laudantium saepe quae itaque
						assumenda iste voluptatibus itaque dolores voluptate quod
						doloremque, nisi atque consequatur omnis. Exercitationem deserunt,
						maiores quisquam sed harum soluta fuga in iste recusandae.
						repellendus itaque atque sit, minus debitis nemo cupiditate
						veritatis eius illum fugit suscipit corrupti omnis? Et, eaque vel
						dolores officia quaerat nam modi repellendus aspernatur omnis
						veritatis adipisci placeat. Ipsum quaerat eum, eligendi at esse
						possimus pariatur officiis consequuntur laborum veritatis. Tempore,
						laborum? Sapiente debitis deleniti cum veritatis vitae, sint
						blanditiis similique.{" "}
					</p>
				</div>
				<Image
					src={imageUrl}
					alt={imageAlt}
					width={500}
					height={500}
                    className="mb-10 lg:max-w-[40%]"
				/>
			</article>
				{video !== "" && (
					<div className=' w-[300px] flex bg-gray-500  mb-20 translate-x-[-15px]'>
						<iframe
							src={getEmbedUrl(video || "")}
							width={300}
							height={300}
							className='mt-[30px] ml-[30px] mb-[-30px] mr-[-30px] shadow-black shadow-md'
						/>
					</div>
				)}
		</section>
	);
};

export default OfferDescription;
