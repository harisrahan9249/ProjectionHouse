'use client'

import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/outline"

import Fireflies from "../components/Fireflies"
import ForestAtmosphere from "../components/ForestAtmosphere"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function SustainabilityPage(){

useEffect(()=>{
AOS.init({
duration:1200,
once:true
})
},[])

return(

<main className="min-h-screen bg-gradient-to-b from-[#06150d] via-[#0b2417] to-[#020a06] text-white overflow-hidden relative">

<Fireflies/>
<ForestAtmosphere/>

{/* HOME BUTTON */}

<Link
href="/"
className="fixed top-24 left-6 z-50 w-11 h-11 rounded-full
bg-black/40 backdrop-blur border border-green-500/40
flex items-center justify-center
text-green-400 hover:bg-green-500 hover:text-black transition"
>

<HomeIcon className="w-5 h-5"/>

</Link>


{/* HERO */}

<section className="relative max-w-7xl mx-auto px-8 pt-32 pb-28 grid lg:grid-cols-2 gap-20 items-center">

{/* PARALLAX TREES */}

<div className="absolute inset-0 overflow-hidden z-0">

<img
src="/image/tree-layer1.png"
className="absolute bottom-0 w-full opacity-40"
/>

<img
src="/image/tree-layer2.png"
className="absolute bottom-0 w-full opacity-60"
/>

<img
src="/image/tree-layer3.png"
className="absolute bottom-0 w-full opacity-80"
/>

</div>


{/* LEFT TEXT */}

<div data-aos="fade-up" className="relative z-10">

<div className="flex items-center gap-3 mb-6">
<span className="w-10 h-[2px] bg-green-400"/>
<span className="uppercase tracking-widest text-green-400 text-sm">
Sustainability
</span>
</div>

<h1 className="text-4xl lg:text-5xl font-light leading-tight mb-8">
Sustainably Living <br/>
Today for a <br/>
<span className="font-semibold text-green-400">
Greener Tomorrow
</span>
</h1>

<p className="text-gray-300 max-w-xl leading-relaxed mb-10">
At Projection House sustainability means balancing innovation
with environmental responsibility while creating long-term value
for society and future generations.
</p>

</div>


{/* HERO IMAGE */}

<div
data-aos="zoom-in"
className="relative h-[520px] rounded-3xl overflow-hidden border border-green-500/20 shadow-2xl"
>

<div
className="absolute inset-0 bg-cover bg-center"
style={{backgroundImage:"url(/image/sustainability-bg.jpg)"}}
/>

<div className="absolute inset-0 bg-gradient-to-tr from-[#05150c]/90 via-[#0d2c18]/70 to-transparent"/>

</div>

</section>


{/* STRATEGY */}

<section className="max-w-7xl mx-auto px-8 py-24">

<h2 data-aos="fade-up" className="text-3xl font-light mb-6 text-green-400">
Our Sustainability Strategy
</h2>

<p data-aos="fade-up" className="text-gray-300 max-w-5xl leading-relaxed">
Projection House follows Environmental Social and Governance
principles aligned with global sustainability frameworks
including the UN Sustainable Development Goals.
</p>

</section>


{/* INITIATIVES */}

<section className="max-w-7xl mx-auto px-8 py-24">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{[
{t:"Energy Efficient Infrastructure",img:"sustainability-1.jpg"},
{t:"Smart Green Technologies",img:"sustainability-2.jpg"},
{t:"Responsible Procurement",img:"sustainability-3.jpg"},
{t:"Lifecycle Asset Management",img:"sustainability-4.jpg"},
{t:"Compliance & Governance",img:"sustainability-5.jpg"},
{t:"Operational Transparency",img:"sustainability-6.jpg"}
].map(item=>(

<div
key={item.t}
data-aos="fade-up"
className="group bg-black/30 backdrop-blur-xl border border-green-500/10
rounded-3xl overflow-hidden hover:border-green-400/40 transition"
>

<div className="relative h-40">

<div
className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
style={{backgroundImage:`url(/image/${item.img})`}}
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>

</div>

<div className="p-6">

<h3 className="text-lg font-medium text-green-300">
{item.t}
</h3>

</div>

</div>

))}

</div>

</section>


{/* COMMITMENT */}

<section className="max-w-5xl mx-auto px-8 py-28 text-center">

<h2 data-aos="fade-up" className="text-3xl font-light mb-8 text-green-400">
Our Commitment
</h2>

<p data-aos="fade-up" className="text-gray-300 leading-relaxed">
Sustainability at Projection House is a continuous journey.
We remain committed to protecting the environment, supporting
communities and creating responsible innovation.
</p>

</section>

</main>

)

}