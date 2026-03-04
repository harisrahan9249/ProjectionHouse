import React from 'react'
import { Button } from "@/components/ui/button"

function Ingredient() {
  return (
    <>
      <div id="ingredient" className="text-center py-16 bg-gradient-to-b from-[#1A132F] to-[#6C4AB6]">
        <h1 className='text-5xl font-extrabold text-white mb-12' data-aos="fade-down">
          Ingredient Science
        </h1>
        <div className="container grid md:grid-cols-3 grid-cols-1 gap-10 px-6 max-w-7xl mx-auto">

          {/* Card 1 */}
          <div className="bg-[#2B2149] p-8 rounded-2xl shadow-2xl hover:shadow-[#6C4AB6]/40 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
            <h2 className='text-white text-2xl font-semibold mb-2'>Hyaluronic Acid (HA)</h2>
            <p className='text-gray-300 mb-4'>The Ultimate Hydration Booster for Your Skin</p>
            <p className='text-gray-400 text-sm mb-4'>Hyaluronic Acid (HA) retains up to 1,000 times its weight in water, offering deep hydration, reducing wrinkles, and improving skin resilience. Suitable for all skin types.</p>
            <Button className="text-white border-white hover:border-cyan-400 bg-transparent hover:bg-cyan-500 transition w-full" variant="outline">Read More</Button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#2B2149] p-8 rounded-2xl shadow-2xl hover:shadow-[#6C4AB6]/40 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
            <h2 className='text-white text-2xl font-semibold mb-2'>Ceramides in Skincare</h2>
            <p className='text-gray-300 mb-4'>Hydration & Barrier Protection</p>
            <p className='text-gray-400 text-sm mb-4'>Ceramides are lipid molecules forming 50% of the skin barrier. They prevent moisture loss and protect from environmental stress, supporting hydration and anti-aging benefits.</p>
            <Button className="text-white border-white hover:border-cyan-400 bg-transparent hover:bg-cyan-500 transition w-full" variant="outline">Read More</Button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#2B2149] p-8 rounded-2xl shadow-2xl hover:shadow-[#6C4AB6]/40 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="300">
            <h2 className='text-white text-2xl font-semibold mb-2'>Niacinamide (Vitamin B3)</h2>
            <p className='text-gray-300 mb-4'>The Skincare Powerhouse</p>
            <p className='text-gray-400 text-sm mb-4'>Niacinamide strengthens the skin barrier, improves tone, reduces acne, and tackles aging. A versatile solution for a radiant, resilient complexion.</p>
            <Button className="text-white border-white hover:border-cyan-400 bg-transparent hover:bg-cyan-500 transition w-full" variant="outline">Read More</Button>
          </div>

          {/* Card 4 */}
          <div className="bg-[#2B2149] p-8 rounded-2xl shadow-2xl hover:shadow-[#6C4AB6]/40 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
            <h2 className='text-white text-2xl font-semibold mb-2'>Titanium Dioxide</h2>
            <p className='text-gray-300 mb-4'>Brightening & UV Protection</p>
            <p className='text-gray-400 text-sm mb-4'>Titanium Dioxide is a mineral-based sunscreen agent that offers UV protection and a brightening effect, ideal for daily sun defense and luminous skin tone.</p>
            <Button className="text-white border-white hover:border-cyan-400 bg-transparent hover:bg-cyan-500 transition w-full" variant="outline">Read More</Button>
          </div>

          {/* Card 5 */}
          <div className="bg-[#2B2149] p-8 rounded-2xl shadow-2xl hover:shadow-[#6C4AB6]/40 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="500">
            <h2 className='text-white text-2xl font-semibold mb-2'>8M Sodium Hyaluronate</h2>
            <p className='text-gray-300 mb-4'>Superior Surface Hydration</p>
            <p className='text-gray-400 text-sm mb-4'>With its high molecular weight, 8M Sodium Hyaluronate forms a moisture-retaining barrier that hydrates and protects the skin’s surface for extended periods.</p>
            <Button className="text-white border-white hover:border-cyan-400 bg-transparent hover:bg-cyan-500 transition w-full" variant="outline">Read More</Button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Ingredient;
