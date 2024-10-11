import { FC } from "react";

type OfferHeaderProps = {
	backgroundImage: string;
	headerTitle: string;
};

const OfferHeader: FC<OfferHeaderProps> = ({
	backgroundImage,
	headerTitle,
}) => {
	return (
		<header
			className='relative w-full h-[40svh] bg-center bg-cover flex justify-center items-end'
			style={{
				backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
			}}
		>
			<h1 className='text-white z-10 relative text-2xl text-center mb-10 uppercase'>
				{headerTitle}
			</h1>
			<div className='absolute inset-0 bg-black bg-opacity-40'></div>
		</header>
	);
};

export default OfferHeader;
