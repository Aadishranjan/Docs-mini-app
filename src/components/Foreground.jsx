import React, { useRef } from "react";
import Cards from "./Cards.jsx"

function Foreground() {
  const ref = useRef(null)
  const data = [
    {
      desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis magnis lacus penatibus mus lacus.",
      filesize: ".5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
    },
    {
      desc: "Phasellus vestibulum erat vel elit condimentum, sed convallis est eleifend.",
      filesize: ".7mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"}
    },
    ]
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index)=>(
        <Cards data={item} reference={ref} />
        ))}
    </div>
    )
}

export default Foreground;