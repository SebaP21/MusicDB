import Link from "next/link";
import LogoFooter from "../Logo/LogoFooter";
import SocialMediaFooter from "./SocialMediaFooter/SocialMediaFooter";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<section className='bg-black text-white flex flex-col justify-evenly items-center py-8 overflow-hidden gap-4 sm:flex-row'>
				<div className='max-h-[30svh] min-w-[30%]'>
					<Link href={"/"}>
                    <LogoFooter />
                    </Link>
				</div>
				<div className='flex items-center justify-between min-w-[8%] gap-4'>
					<SocialMediaFooter />
				</div>
				<div className='flex min-w-[30%] flex-col justify-evenly items-center text-xl gap-4 lg:flex-row'>
					<Link
						className='transition-colors hover:text-orange-400'
						href={"/#about"}
					>
						<h4>O mnie</h4>
					</Link>
					<Link
						className='transition-colors hover:text-orange-400'
						href={"/#offer"}
					>
						<h4>Oferta</h4>
					</Link>
					<Link
						className='transition-colors hover:text-orange-400'
						href={"/#portfolio"}
					>
						<h4>Portfolio</h4>
					</Link>
					<Link
						className='transition-colors hover:text-orange-400'
						href={"/#contact"}
					>
						<h4>Kontakt</h4>
					</Link>
				</div>
			</section>
			<footer
            className="min-h-[7svh] flex justify-center items-center uppercase text-white bg-black border-t border-t-white text-xl"
            >
				<p> &copy; {currentYear} musicdb.pl</p>
			</footer>
		</>
	);
};

export default Footer;
