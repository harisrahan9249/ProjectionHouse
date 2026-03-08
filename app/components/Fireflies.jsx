'use client'

import { useEffect, useRef } from "react"

export default function Fireflies(){

const canvasRef = useRef(null)

useEffect(()=>{

const canvas = canvasRef.current
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let mouse = {x:0,y:0}

window.addEventListener("mousemove",e=>{
mouse.x=e.clientX
mouse.y=e.clientY
})

let particles=[]

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2+1,
vx:(Math.random()-0.5)*0.4,
vy:(Math.random()-0.5)*0.4
})
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

let dx = mouse.x-p.x
let dy = mouse.y-p.y

p.x += p.vx + dx*0.0002
p.y += p.vy + dy*0.0002

ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fillStyle="rgba(120,255,160,0.9)"
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()

},[])

return(
<canvas
ref={canvasRef}
className="fixed inset-0 pointer-events-none z-0"
/>
)

}