'use client';

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ICONS } from "../../config/iconMap";

export default function NavDropdown({ item, desktopGroup, setDesktopGroup }) {

  return (

    <div className="absolute left-1/2 top-full mt-6 w-[1050px] -translate-x-1/2
                    rounded-2xl border border-gray-200
                    bg-white/90 backdrop-blur-xl
                    shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)]
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    translate-y-4 group-hover:translate-y-0
                    transition-all duration-300">

      <div className="grid grid-cols-3 gap-12 p-10">

        {/* Featured Side Panel */}
        <div className="relative">

          <img
            src={item.image}
            className="rounded-xl h-48 w-full object-cover"
            alt=""
          />

          {/* <div className="mt-4 text-sm text-gray-500 leading-relaxed">
            Discover integrated technology solutions designed to power
            modern digital environments and intelligent infrastructure.
          </div> */}

        </div>


        {/* Menu Content */}
        <div className="col-span-2 space-y-8">

          {item.pillars.map((group, index) => {

            const Icon = ICONS[group.icon];

            /* ================================
               TURNKEY / DELIVERY MODEL
            ================================= */

            if (group.singleColumn) {

              return (

                <div key={index}>

                  <div className="flex items-center gap-3 mb-4 text-sm font-semibold text-gray-900">

                    <Icon className="w-5 h-5 text-green-600" />

                    {group.title || item.name}

                  </div>

                  <div className="space-y-2">

                    {group.items.map((sub) => (

                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="group relative flex items-center px-4 py-3
                                   rounded-xl bg-white
                                   border border-transparent
                                   hover:border-green-200
                                   hover:bg-green-50
                                   hover:shadow-sm
                                   hover:translate-x-1
                                   transition-all duration-300"
                      >

                        {/* Animated indicator */}
                        <span className="absolute left-0 top-0 h-full w-1
                                         bg-green-500 rounded-l-xl
                                         scale-y-0
                                         group-hover:scale-y-100
                                         transition-transform duration-300 origin-top"/>

                        <span className="text-sm text-gray-700 group-hover:text-green-700 font-medium">
                          {sub.label}
                        </span>

                      </Link>

                    ))}

                  </div>

                </div>

              );

            }

            /* ================================
               NORMAL SOLUTION GROUPS
            ================================= */

            return (

              <div key={group.title}>

                <button
                  onClick={() =>
                    setDesktopGroup(
                      desktopGroup === group.title ? null : group.title
                    )
                  }
                  className="flex items-center gap-3 w-full
                             text-sm font-semibold text-gray-900
                             hover:text-green-600 transition"
                >

                  <Icon className="w-5 h-5 text-green-600" />

                  {group.title}

                  <ChevronDownIcon
                    className={`ml-auto w-4 h-4 transition-transform duration-300 ${
                      desktopGroup === group.title ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {desktopGroup === group.title && (

                  <div className="grid grid-cols-2 gap-3 mt-4">

                    {group.items.map((sub) => (

                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="group relative flex items-center px-4 py-3
                                   rounded-xl bg-white
                                   border border-transparent
                                   hover:border-green-200
                                   hover:bg-green-50
                                   hover:shadow-sm
                                   hover:translate-x-1
                                   transition-all duration-300"
                      >

                        <span className="absolute left-0 top-0 h-full w-1
                                         bg-green-500 rounded-l-xl
                                         scale-y-0
                                         group-hover:scale-y-100
                                         transition-transform duration-300 origin-top"/>

                        <span className="text-sm text-gray-700 group-hover:text-green-700 font-medium">
                          {sub.label}
                        </span>

                      </Link>

                    ))}

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>

    </div>

  );

}