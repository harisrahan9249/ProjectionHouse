'use client'

import { useEffect } from "react"

export default function ForestScene(){

useEffect(()=>{

const handleScroll=()=>{

const scroll=window.scrollY

document.querySelectorAll(".parallax").forEach(el=>{

const speed=el.dataset.speed
el.style.transform=`translateY(${scroll*speed}px)`

})

}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

{/* fog glow */}

<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(120,255,160,0.15),transparent_60%)] animate-[fogMove_18s_ease-in-out_infinite]"/>

{/* sunlight */}

<div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-green-400/20 blur-[160px] rounded-full"/>

{/* butterflies */}

<div className="leaf absolute left-[10%] top-[10%] text-green-300 text-2xl duration-[18s]">
🦋
</div>

<div className="leaf absolute left-[80%] top-[5%] text-green-300 text-xl duration-[20s]">
🦋
</div>

<div className="leaf absolute left-[45%] top-[0%] text-green-400 text-xl duration-[22s]">
🍃
</div>

</div>

)

}