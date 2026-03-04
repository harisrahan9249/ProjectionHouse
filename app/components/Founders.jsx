'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const founders = [
  {
    name: 'Dr. Aafreen Khan',
    title: 'Founder & Aesthetic Physician',
    img: '/glansa/aafreen.jpg',
    bio: `Dr. Aafreen Khan is an accomplished Aesthetic Physician with over 15 years of extensive experience, combining deep clinical expertise with a nuanced understanding of the cosmetic and wellness industry. A medical graduate from Mumbai, she also holds a postgraduate degree in Healthcare Management, a Postgraduate Diploma in Hospital Administration, and advanced certifications in Skin Aesthetics, Trichology, Obesity Management, and Beauty & Aesthetics.

Her strength lies in delivering highly personalized patient care by blending advanced procedures with tailored treatment plans. With extensive knowledge of lasers, skincare actives, and clinical protocols, she specializes in curating customized skincare regimens that address individual skin concerns and support long-term skin health.

Dr. Khan’s keen interest in product knowledge and skin formulations has played a vital role in the success of her aesthetic practice. Her broad understanding of ingredients and skin biology has allowed her to develop and curate formulations suitable for various skin types and concerns. She believes that skincare should not only treat existing issues but also serve as a preventative measure to maintain youthful, resilient skin.

Driven by this philosophy, she combines science-backed actives with a thoughtful approach to create skincare that is safe, effective, and clean. Her mission is to empower clients with the right products and treatments—designed with integrity and precision—for sustainable, healthy skin.`,
  },
  {
    name: 'Dr Vaishali Malde',
    title: 'Founder & Aesthetic Physician',
    img: '/glansa/drvaishali.jpg',
    bio: `Dr Vaishali Malde is an experienced Aesthetic Physician with a strong educational background, Medical graduate from Mumbai and holding a Postgraduate Diploma in Emergency Services. She is certified in Skin Aesthetics, Trichology, and Obesity Management and has also completed a Certificate Course in Modern Pharmacology.

With over 15 years of expertise in aesthetics, she has gained extensive experience in patient handling, clinic management, and curating personalized skincare plans. Her passion lies in staying updated with the latest treatment options and guidelines, ensuring that clients receive the most effective and scientifically backed solutions.

Having successfully run an aesthetic clinic for the past year, Dr. Vaishali has further refined her skills in managing diverse client needs, optimizing treatment protocols, and ensuring top-tier patient care.

Whether it’s guiding patients through their skincare journey, recommending the best professional products, or performing transformative cosmetic treatments, Dr. Vaishali's goal is to help individuals look and feel their best. She believes that beauty is both an art and a science, and she takes pride in combining both to deliver exceptional results.`,
  },
];

const Founders = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const previewLimit = 350;

  const toggleExpand = (idx) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-[#1A132F] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-wide"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          Meet Our Founders
        </h2>
        <p
          className="text-[#E0C3FC] text-lg md:text-xl mb-14 max-w-3xl mx-auto tracking-wide leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Passionate leaders who blend science, beauty, and innovation to bring out your best skin.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, idx) => {
            const isExpanded = expandedIndex === idx;
            const displayBio =
              !isExpanded && founder.bio.length > previewLimit
                ? founder.bio.slice(0, previewLimit) + '...'
                : founder.bio;

            return (
              <div
                key={idx}
                className="bg-[#2A1F47] border border-[#7142d2]/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-[1.03] flex flex-col min-h-[520px]"
                data-aos="zoom-in"
                data-aos-delay={300 + idx * 200}
                data-aos-duration="1000"
              >
                {/* Circular Image */}
                <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#7142d2] flex-shrink-0 shadow-md">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    width={112}
                    height={112}
                    className="object-cover"
                    style={{
                      objectPosition: idx === 0 ? 'center 35%' : 'center center',
                    }}
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-1">{founder.name}</h3>
                <p className="text-[#C9B6F5] mb-5 font-medium">{founder.title}</p>

                <p className="text-gray-300 text-sm whitespace-pre-line mb-8 flex-grow leading-relaxed">{displayBio}</p>

                {founder.bio.length > previewLimit && (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="mt-auto text-[#a88bfa] font-semibold hover:text-white transition-colors duration-300 focus:outline-none focus:underline"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Founders;
