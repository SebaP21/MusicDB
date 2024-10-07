import OfferBox from "./OfferBox/OfferBox";

const Offer = () => {
	return (
		<section
			className='relative w-full min-h-[100svh] bg-cover bg-center flex justify-center items-center'
			style={{
				backgroundImage:
					"url('https://admin-musicdb.online/wp-content/uploads/2024/09/DSC01029-scaled-1.jpg')",
			}}
		>
			<div className='absolute inset-0 bg-black bg-opacity-80'></div>
			<OfferBox />
		</section>
	);
};

export default Offer;
