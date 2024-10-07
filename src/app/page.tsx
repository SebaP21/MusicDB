import About from "@/Components/home/About/About";
import Contact from "@/Components/home/Contact/Contact";
import CtaSocialMedia from "@/Components/home/CTASocialMedia/CtaSocialMedia";
import Offer from "@/Components/home/Offer/Offer";
import HomePageHeader from "@/Components/home/PageHeader/HomePageHeader";
import { Portfolio } from "@/Components/home/Portfolio/Porfolio";

export default function Home() {
	return (
		<>
			<HomePageHeader />
			<About />
			<Offer />
			<CtaSocialMedia/>
			<Portfolio/>
			<Contact />
		</>
	);
}
