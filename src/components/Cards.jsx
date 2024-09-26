import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Cards({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer w-full absolute bottom-0 left-0">
        <div className="px-8 py-3 flex items-center justify-between mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center">
          {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
          <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
          )}
      </div> 
    </motion.div>
    )
}

export default Cards;