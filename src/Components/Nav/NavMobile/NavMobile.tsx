import LogoNav from "@/Components/Logo/LogoNav";
import NavMobileClient from "./NavMobileClient";
import Link from "next/link";
import { OfferLink } from "@/Components/Nav/NavLinks/NavOfferLinks/OfferLinksFetcher";

const NavMobile = ({ offers }: { offers: OfferLink[] }) => (
  <div className="sticky top-0 flex w-full h-[10svh] bg-black justify-between  items-center overflow-hidden z-50 sm:hidden">
    <Link href="/">
      <div className="flex max-w-[140px]  items-center justify-center ">
        <LogoNav />
      </div>
    </Link>

    <NavMobileClient offers={offers} />
  </div>
);

export default NavMobile;
