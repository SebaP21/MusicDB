import OfferAllLinks from "../OfferAllLinks/OfferAllLink";

const OfferBox = () => {
	return (
		<div className='relative bg-black bg-opacity-50 text-white  w-[90%] min-h-[70svh] flex flex-col items-center uppercase p-5 md:w-[75%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] '>
			<h3 className='relative text-xl text-center p-3 font-bold mb-5'>
				Wychodząc naprzeciw oczekiwaniom oferuje Państwu
			</h3>
			<div className='w-[50%] h-[2px] bg-orange-300 mb-3 '></div>
			<div className='min-h-[60svh] flex flex-col text-center justify-evenly'>
				<OfferAllLinks />
			</div>
		</div>
	);
};

export default OfferBox;
