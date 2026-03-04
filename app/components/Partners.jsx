    'use client';

    import { useEffect, useRef } from 'react';

    export default function PartnersShowcase() {
    const scrollerRef = useRef(null);

    /* smooth, continuous auto scroll */
    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        let frameId;
        let velocity = 0.5;

        const animate = () => {
        scroller.scrollLeft += velocity;

        // loop
        if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
            scroller.scrollLeft = 0;
        }
        frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, []);

    const partners = [
        '1-iadea.webp','1-NEC.webp','2-2-jbl.webp','2-Crestron.webp','2-LG.webp',
        '2-logitech.webp','2-Maxhub.webp','2-onelan.webp','2-wisenet.webp',
        '3-amx.webp','3-Electrovoice.webp','3-epson.webp','3-poly.webp',
        '3-samsung.webp','3-Vaddio.webp','4-barco.webp','4-Panasonic.webp',
        '5-Christie.webp','5-Mersive.webp','6-Hikvision.webp','6-Wolfvision.webp',
        '7-Datapath.webp','8-Da-Lite.webp','9-Fermax.webp','10-shure.webp',
        '11-SENNHEISER.webp','12-BEYER-DYNAMIC.webp','13-NEUTRIK.webp',
        '14-akg.webp','15-audio-technica.webp','17-qsc.webp','18-biamp.webp',
        '22-yamaha.webp','25-denon.webp','26-marantz.webp','30-ALLEN-HEATH.webp',
        '31-BEHRINGER.webp','36-Faac.webp','38-Cisco.webp','39-Aruba.webp',
        '43-HP.webp','44-dell.webp','bose.webp','bss.webp','kramer.webp',
        'optoma.webp'
    ];

    return (
        <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* HEADER */}
            <div className="text-center mb-12">
            <p className="text-xs uppercase text-gray-500 tracking-wide">
                Partners & Technology Ecosystem
            </p>
            <h2 className="text-3xl font-semibold text-gray-900">
                Trusted by Leading Global Brands
            </h2>
            </div>

            {/* SCROLLER */}
            <div
            ref={scrollerRef}
            className="flex gap-20 overflow-x-hidden no-scrollbar"
            >
            {[...partners, ...partners].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0">
                <img
                    src={`/image/partners/${logo}`}
                    alt={logo.replace('.webp', '')}
                    className="h-20 object-contain"
                />
                </div>
            ))}
            </div>

        </div>
        </section>
    );
    }
