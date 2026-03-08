'use client';

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import NavDropdown from "./NavDropdown";
import { NAV } from "../../config/navConfig";
export default function DesktopNav({ desktopGroup, setDesktopGroup }) {
  return (
    <nav className="hidden lg:flex justify-center gap-10 whitespace-nowrap">

      {NAV.map(item =>
        item.pillars ? (

          <div key={item.name} className="relative group">

            <button className="flex items-center gap-1 text-sm font-medium">
              {item.name}
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            <NavDropdown
              item={item}
              desktopGroup={desktopGroup}
              setDesktopGroup={setDesktopGroup}
            />

          </div>

        ) : (

          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium"
          >
            {item.name}
          </Link>

        )
      )}

    </nav>
  );
}