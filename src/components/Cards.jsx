import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Cards({ changedData, reference }) {
    return (
        <>

            <motion.div drag whileDrag={{scale: 1.2}} whileHover={{backgroundColor : "#4D4D4D"}} dragConstraints={reference}
             className=' w-44 h-56 bg-zinc-600 border-black rounded-3xl overflow-hidden '>
                <span className='relative text-white top-5 left-5'>
                    < FaFileLines />
                </span>
                <h5 className=' px-5 py-8 text-xs font-semibold text-zinc-300'>{changedData.content}</h5>

                <div className=' flex item-center justify-between px-5 py-3 text-zinc-300'>
                    <p className='text-xs font-semibold'>{changedData.size}</p>
                    <span className=''>
                        {changedData.isDownload ? <FaCloudDownloadAlt /> : <IoCloseCircleSharp />}


                    </span>
                </div>
                {changedData.bar.isBar ? (
                    <div className= {`footer w-44 py-3 ${changedData.bar.barColor === "blue" ? 'bg-blue-500' : 'bg-green-500' } `}>
                    <h5 className=' flex text-center justify-center text-xs font-semibold text-zinc-700 ' >{changedData.bar.barDetail}</h5>
                    </div>) : null}

            </motion.div>


        </>
    )
}

export default Cards