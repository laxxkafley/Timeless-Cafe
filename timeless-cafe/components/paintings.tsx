

"use client"

import Link from "next/link";
import Image from "next/image";

type PaintingModel={ 
  
    id:string;
    title:string;
    image:string
    description:string;
    deletePainting:(id:string)=>void;
//     addPainting: (title: string, image: string, description: string) => void; // Adjusted to accept title, image, description
//   updatePainting: (id: string, title: string, image: string, description: string) => void; // Adjusted to accept all parameters

    
    }

export default function Painting({
    id, title, image, description,deletePainting
}:PaintingModel){
    return(
        <>
        

        <div className="border p-4 rounded shadow-lg text-center">
            
              <h2 className="text-xl font-bold mt-2 mb-4     text-center">{title}</h2>
              <div className="flex justify-center items-center">
  <Image src={image} alt={title} width={400} height={300} className="rounded" />
</div>
      
      <p className="p-4 text-blue-600 h-32">{description}</p>

        <div key={id}></div>
        
        {title}
        <button 
        onClick={()=>deletePainting(id)}>
            delete
        </button>
        <Link
        href={{
            pathname:'/edit',
            query:{id, title}
        }} 
    > Edit
        </Link>
        </div>
        </>
    )
}