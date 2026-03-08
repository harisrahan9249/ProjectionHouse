'use client';

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NAV } from "../../config/navConfig";
import { ICONS } from "../../config/iconMap";

export default function MobileMenu({
  mobileOpen,
  setMobileOpen,
  mobileSection,
  setMobileSection,
  mobileGroup,
  setMobileGroup,
}) {
  if (!mobileOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t">

      <div className="px-6 py-6 space-y-6">

        {NAV.map(item =>
          item.pillars ? (

            <div key={item.name}>

              <button
                onClick={() =>
                  setMobileSection(
                    mobileSection === item.name ? null : item.name
                  )
                }
                className="flex w-full items-center font-semibold"
              >
                {item.name}

                <ChevronDownIcon
                  className={`ml-auto w-4 h-4 transition ${
                    mobileSection === item.name ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileSection === item.name && (
                <div className="mt-4 space-y-4">

                  {item.pillars.map(group => {

                    const Icon = ICONS[group.icon];

                    return (
                      <div key={group.title}>

                        <button
                          onClick={() =>
                            setMobileGroup(
                              mobileGroup === group.title ? null : group.title
                            )
                          }
                          className="flex w-full items-center gap-3 text-sm font-medium"
                        >
                          <Icon className="w-5 h-5 text-green-600" />
                          {group.title}

                          <ChevronDownIcon
                            className={`ml-auto w-4 h-4 transition ${
                              mobileGroup === group.title
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        {mobileGroup === group.title && (
                          <div className="mt-2 space-y-2 pl-8">

                            {group.items.map(sub => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-sm text-gray-600 truncate"
                              >
                                {sub.label}
                              </Link>
                            ))}

                          </div>
                        )}

                      </div>
                    );
                  })}

                </div>
              )}

            </div>

          ) : (

            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block font-semibold"
            >
              {item.name}
            </Link>

          )
        )}

      </div>

    </div>
  );
}