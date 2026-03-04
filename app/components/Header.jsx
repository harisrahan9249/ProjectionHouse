'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  CpuChipIcon,
  CommandLineIcon,
  TvIcon,
  RectangleGroupIcon,
  BuildingLibraryIcon,
  ShoppingBagIcon,
  HomeModernIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

/* ===============================
   ICON MAP
=============================== */
const ICONS = {
  it: CpuChipIcon,
  elv: CommandLineIcon,
  av: TvIcon,
  fitout: RectangleGroupIcon,
  retail: ShoppingBagIcon,
  hospitality: HomeModernIcon,
  education: AcademicCapIcon,
  public: BuildingLibraryIcon,
  security: ShieldCheckIcon,
  delivery: ClipboardDocumentCheckIcon,
  innovation: SparklesIcon,
};

/* ===============================
   NAV CONFIG
=============================== */
const NAV = [
  { name: 'About', href: '/about' },
  {
    name: 'Solutions',
    image: '/image/image1.jpg',
    pillars: [
      {
        title: 'AV & Experience Technologies',
        icon: 'av',
        items: [
          { label: 'Digital Signage & LED Walls', href: '/solutions/digital-signage' },
          { label: 'Audio Systems & Acoustics', href: '/solutions/audio-acoustics' },
          { label: 'Control Rooms & Command Centers', href: '/solutions/control-room-solution' },
          { label: 'Conference & Collaboration Systems', href: '/solutions/conference-systems' },
          { label: 'Immersive & Interactive Experiences', href: '/solutions/immersive' },
          { label: 'Drive-Thru Solutions', href: '/solutions/drive-thru' },
          { label: 'Self-Service Kiosks', href: '/solutions/self-service-kiosks' },
        ],
      },
      {
        title: 'ELV & Smart Systems',
        icon: 'elv',
        items: [
          { label: 'CCTV & Video Analytics', href: '/solutions/cctv' },
          { label: 'Access Control & Biometric Systems', href: '/solutions/access-control' },
          { label: 'Intrusion & Perimeter Security', href: '/solutions/intrusion-security' },
          { label: 'Fire Alarm & Life Safety', href: '/solutions/fire-alarm' },
          { label: 'BMS / IBMS', href: '/solutions/bms' },
          { label: 'Parking Management & LPR', href: '/solutions/parking-lpr' },
        ],
      },
      {
        title: 'Fit-Out & Specialist Works',
        icon: 'fitout',
        items: [
          { label: 'Bespoke Interior Fit-Outs', href: '/solutions/fitout' },
          { label: 'Joinery & Custom Fabrication', href: '/solutions/joinery' },
          { label: 'Acoustic & Sound Control', href: '/solutions/acoustics' },
          { label: 'Specialized Flooring & Wall Systems', href: '/solutions/flooring' },
          { label: 'Secure & Classified Space Construction', href: '/solutions/secure-spaces' },
        ],
      },
      {
        title: 'IT / ICT Infrastructure',
        icon: 'it',
        items: [
          { label: 'Data Centers & Server Rooms', href: '/solutions/data-centers' },
          { label: 'Structured Cabling (Copper / Fiber)', href: '/solutions/structured-cabling' },
          { label: 'Network Design (LAN / WAN / Wi-Fi)', href: '/solutions/network-design' },
          { label: 'Cloud & Hybrid Connectivity', href: '/solutions/cloud-hybrid' },
          { label: 'Cybersecurity & SOC Integration', href: '/solutions/cybersecurity-soc' },
        ],
      },
      {
        title: 'Innovative & Emerging Technologies',
        icon: 'innovation',
        items: [
          { label: 'AI & Analytics', href: '/solutions/ai-analytics' },
          { label: 'IoT & Smart Environments', href: '/solutions/iot' },
          { label: 'AR / VR / Simulation Systems', href: '/solutions/ar-vr' },
          { label: 'Smart Ticketing & Crowd Management', href: '/solutions/smart-ticketing' },
          { label: 'Energy Optimization & Sustainability Tech', href: '/solutions/energy-tech' },
        ],
      },
    ],
  },



  {
    name: 'Delivery Model',
    image: '/image/image3.jpg',
    pillars: [
      {
        title: 'Turnkey – End-to-End Delivery & Asset Lifecycle',
        icon: 'delivery',
        singleColumn: true,
        items: [
          { label: 'Consultancy & Assessment', href: '/delivery/consultancy' },
          { label: 'Concept Design & Engineering', href: '/delivery/design-engineering' },
          { label: 'Supply, Installation & Integration', href: '/delivery/installation' },
          { label: 'Compliance, Testing, Commissioning & Handover', href: '/delivery/commissioning' },
          { label: 'Training, AMC & Managed Services', href: '/delivery/managed-services' },
        ],
      },
    ],
  },

  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Contact', href: '/contact' },
];

/* ===============================
   HEADER
=============================== */
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
        <nav className="hidden lg:flex justify-center gap-10 whitespace-nowrap">
          {NAV.map(item =>
            item.pillars ? (
              <div key={item.name} className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium">
                  {item.name}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {/* DROPDOWN */}
                <div className="absolute left-1/2 top-full mt-6 w-[900px] -translate-x-1/2
                                bg-white border shadow-lg opacity-0 invisible
                                group-hover:opacity-100 group-hover:visible transition">
                  <div className="grid grid-cols-3 gap-8 p-8">
                    <img
                      src={item.image}
                      className="rounded-xl h-40 w-full object-cover"
                      alt=""
                    />

                    <div className="col-span-2 space-y-6">
                      {item.pillars.map(group => {
                        const Icon = ICONS[group.icon];
                        return (
                          <div key={group.title}>
                            <button
                              onClick={() =>
                                setDesktopGroup(
                                  desktopGroup === group.title ? null : group.title
                                )
                              }
                              className="flex w-full items-center gap-3 font-semibold text-sm"
                            >
                              <Icon className="w-5 h-5 text-green-600 shrink-0" />
                              {group.title}
                              <ChevronDownIcon
                                className={`ml-auto w-4 h-4 transition ${
                                  desktopGroup === group.title ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {desktopGroup === group.title && (
                              <div
                                className={`mt-3 grid gap-3 ${
                                  group.singleColumn ? 'grid-cols-1' : 'grid-cols-2'
                                }`}
                              >
                                {group.items.map(sub => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    className="px-4 py-2 bg-gray-50 rounded-lg
                                               text-sm truncate hover:bg-green-50"
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
                  </div>
                </div>
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

        {/* MOBILE ICON */}
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
      {mobileOpen && (
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
                        mobileSection === item.name ? 'rotate-180' : ''
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
                                  mobileGroup === group.title ? 'rotate-180' : ''
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
      )}
    </header>
  );
}
