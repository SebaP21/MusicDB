import LogoNav from "@/Components/Logo/LogoNav";
import Link from "next/link";
import NavDesktopClient from "./NavDesktopClient";
import { OfferLink } from "@/Components/Nav/NavLinks/NavOfferLinks/OfferLinksFetcher";

const NavDesktop = ({ offers }: { offers: OfferLink[] }) => (
  <div className=" hidden sticky top-0 bg-black text-white  h-[100px] sm:flex justify-between w-full items-center z-50 ">
    <Link href={"/"}>
      <div className="max-w-[180px] max-h-[100px] overflow-hidden flex items-center justify-center ">
        <LogoNav />
      </div>
    </Link>

    <NavDesktopClient offers={offers} />
  </div>
);

export default NavDesktop;
