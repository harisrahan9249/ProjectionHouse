'use client'

export default function ForestAtmosphere(){

return(

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

{/* moving mist */}

<div className="mist absolute inset-0 opacity-30
bg-[radial-gradient(circle_at_20%_20%,rgba(120,255,160,0.15),transparent_60%)]"/>

{/* sunlight rays */}

<div className="sunGlow absolute top-0 left-1/3 w-[700px] h-[700px]
bg-green-400/20 blur-[180px] rounded-full"/>

{/* floating leaves */}

<div className="leaf absolute left-[15%] top-[5%] text-green-300 text-2xl duration-[18s]">
🍃
</div>

<div className="leaf absolute left-[70%] top-[0%] text-green-300 text-xl duration-[22s]">
🍃
</div>

<div className="leaf absolute left-[45%] top-[0%] text-green-400 text-xl duration-[20s]">
🍃
</div>

</div>

)

}