import React, { useRef } from 'react'
import Cards from './Cards'

function Front() {
    // const data=[ content, size , closeOrDownload, BarDetails, BarColour]
   const ref = useRef(null)
    const data =[
        { content : "hello im new content hehehehehh Lorem ipsum dolor sit amet consectetur",
          size : "0.4mb",
          isDownload : true,
          bar : {isBar : true, barDetail : "Download Now", barColor : "green"}
    }, 
    { content : " Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
          size : "0.8mb",
          isDownload : false,
          bar : {isBar : false, barDetail : "Download Now", barColor : "green"}
    },
    { content : " Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
          size : "0.5mb",
          isDownload : true,
          bar : {isBar : false, barDetail : "Download Now", barColor : "green"}
    },
    { content : "hello I'm new Card hehehehehh Lorem ipsum dolor sit amet consectetur",
          size : "0.9mb",
          isDownload : false,
          bar : {isBar : true, barDetail : "Upload", barColor : "blue"}
    }

    ]
  return (
   <>
   <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen flex gap-10 flex-wrap '>
           {data.map((item, index) => (
            <Cards changedData = {item} reference = {ref}/>    
           ))}
   </div>
   </>
  )
}

export default Front