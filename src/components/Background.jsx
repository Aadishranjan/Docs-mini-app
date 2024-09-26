import React from "react";
 
function Background() {
  return (
    <div className="fixed w-full h-screen z-[2]">
      <div className="absolute text-zinc-600 font-semibold text-2xl py-10 top-[5%] left-1/2 -translate-x-[50%]">documents</div>
      <h1 className="absolute text-[13vw] leading-none tracking-tighter top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900">Docs.</h1>
    </div>
    )
}

export default Background;