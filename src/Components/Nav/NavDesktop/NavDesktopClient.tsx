"use client";

import Link from "next/link";
import { useState } from "react";
import OfferLinkDesktopComponent from "./OfferLinkDesktop/OfferLinkDesktopComponent";
import { OfferLink } from "@/Components/Nav/NavLinks/NavOfferLinks/OfferLinksFetcher";

const NavDesktopClient = ({ offers }: { offers: OfferLink[] }) => {
  const [isOfferShown, setIsOfferShown] = useState(false);

  const toggleOfferMenu = (state: boolean) => {
    setIsOfferShown(state);
  };

  return (
    <nav>
      <div className="min-w-[40%] flex items-center justify-evenly gap-3 uppercase p-4 lg:min-w-[60svh] xl:min-w-[80svh]">
        <Link
          href={"/#about"}
          className="transition-colors hover:text-orange-400"
        >
          <div>
            <h4>O mnie</h4>
          </div>
        </Link>
        <div
          className="relative transition-colors hover:text-orange-400 cursor-pointer"
          onMouseEnter={() => toggleOfferMenu(true)}
          onMouseLeave={() => toggleOfferMenu(false)}
        >
          <h4>Oferta</h4>
          {isOfferShown && (
            <div
              className={`absolute bg-black text-white min-w-[30svh] min-h-[40svh] 
							}`}
            >
              <div className="flex flex-col min-h-[50svh] justify-evenly items-center text-center">
                <OfferLinkDesktopComponent
                  offers={offers}
                  onClick={() => toggleOfferMenu(false)}
                />
              </div>
            </div>
          )}
        </div>
        <Link
          className="transition-colors hover:text-orange-400"
          href={"/#portfolio"}
        >
          <div>
            <h4>Portfolio</h4>
          </div>
        </Link>
        <Link
          className="transition-colors hover:text-orange-400"
          href={"/#contact"}
        >
          <div>
            <h4>Kontakt</h4>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavDesktopClient;
