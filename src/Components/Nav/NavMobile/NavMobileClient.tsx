"use client";

import Image from "next/image";
import { useState } from "react";
import burgerIcon from "../../../Assets/Icons/hamburger.png";
import Link from "next/link";
import OfferLinkComponent from "../NavLinks/NavOfferLinks/OfferLinksComponent";
import { OfferLinksProvider } from "../NavLinks/NavOfferLinks/OfferLinksContext";

import closeBtn from "../../../Assets/Icons/close.png";

const NavMobileClient = () => {
	const [isNavShown, setIsNavShown] = useState(false);
	const [isOfferShown, setIsOfferShown] = useState(false);

	const onClickNav = () => {
		setIsNavShown((prev) => !prev);
	};

	const onClickOfferNav = () => {
		setIsOfferShown((prev) => !prev);
	};

	return (
		<>
			<div className='flex max-w-[50px] mr-5 transition-all hover:max-w-[55px]'>
				{!isNavShown && (
					<button onClick={onClickNav}>
						<Image
							src={burgerIcon}
							alt='burger-icon'
							width={300}
							height={300}
						/>
					</button>
				)}
			</div>

			<nav
				className={`fixed top-0 right-0 h-full w-[90%] bg-black bg-opacity-85 text-white text-4xl flex flex-col justify-evenly items-center uppercase transition-transform duration-400 ease-in-out transform ${
					isNavShown ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<button
					onClick={onClickNav}
					className={`absolute right-7 top-7 transition-transform duration-300 ${
						isNavShown ? "rotate-180" : "rotate-0"
					} `}
				>
					<Image
						src={closeBtn}
						alt={"close-btn"}
						width={30}
						height={30}
					/>
				</button>
				<Link
					onClick={onClickNav}
					href={"/#about"}
					className=' transition-colors hover:text-orange-400'
				>
					<div className='border-b border-orange-400 border-opacity-100'>
						<h4 className='mb-2'>O mnie</h4>
					</div>
				</Link>
				<div
					onClick={onClickOfferNav}
					className='flex flex-col items-center  '
				>
					<h4
						className={`transition-colors ${
							isOfferShown ? "text-orange-400" : "text-white"
						} hover:text-orange-400 border-b border-orange-400 border-opacity-100 pb-2 `}
					>
						Oferta
					</h4>
					<div
						className={`overflow-hidden transition-all duration-300 ease-in-out ${
							isOfferShown ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
						}`}
					>
						<div className=' flex flex-col gap-10 mt-10 text-center text-lg uppercase'>
							<OfferLinksProvider>
								<OfferLinkComponent onClick={onClickNav} />
							</OfferLinksProvider>
						</div>
					</div>
				</div>
				<Link
					onClick={onClickNav}
					className=' transition-colors hover:text-orange-400'
					href={"/#portfolio"}
				>
					<div className='border-b border-orange-400 border-opacity-100'>
						<h4 className='mb-2'>Portfolio</h4>
					</div>
				</Link>
				<Link
					onClick={onClickNav}
					className=' transition-colors hover:text-orange-400'
					href={"/#contact"}
				>
					<div className='border-b border-orange-400 border-opacity-100'>
						<h4 className='mb-2'>Kontakt</h4>
					</div>
				</Link>
			</nav>
		</>
	);
};

export default NavMobileClient;
