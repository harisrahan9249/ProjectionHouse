'use client';

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Header() {

  const [desktopGroup, setDesktopGroup] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [mobileGroup, setMobileGroup] = useState(null);

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b">

      <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-2 lg:grid-cols-3 items-center">

        {/* LOGO */}
        <Link href="/" className="text-xl font-semibold whitespace-nowrap">
          Projection<span className="text-green-600">House</span>
        </Link>

        {/* DESKTOP NAV */}
        <DesktopNav
          desktopGroup={desktopGroup}
          setDesktopGroup={setDesktopGroup}
        />

        {/* MOBILE BUTTON */}
        <div className="flex justify-end lg:hidden">

          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        mobileSection={mobileSection}
        setMobileSection={setMobileSection}
        mobileGroup={mobileGroup}
        setMobileGroup={setMobileGroup}
      />

    </header>
  );
}