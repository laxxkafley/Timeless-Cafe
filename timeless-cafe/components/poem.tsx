


// // 'use client'
// // import Link from "next/link"






// // type PoemModel={ 
   
// //      id: string, 
// //      title: string,
// //       author: string,
// //        content: string, 
// //      deletePoem: (id: string) => void
     
// //     }


// // export default function PoemModel({ id, title, author, content, deletePoem}: PoemModel) {
 
   
// //    return (

    
// //        <div>


        
// //             {title} :{author}:{content} 
           
// //            <button
// //                onClick={() => deletePoem(id)}
// //                className='border-2 border-black m-2 p-1'> delete
// //             </button>
// //             <Link 
// //                 className=""
// //                 href={{
// //                 pathname: '/Poems/edit',
// //                 query: { id, title, author, content },
// //             }} >Edit</Link>

            
          
          

          
      
// //        </div>
// //    )
// // }


// 'use client'
// import Link from "next/link";

// type PoemModel = { 
//    id: string, 
//    title: string, 
//    author: string, 
//    content: string, 
//    deletePoem: (id: string) => void,
//    isAdmin: boolean // Check if the user is an admin
// };

// export default function PoemModel({ id, title, author, content, deletePoem, isAdmin }: PoemModel) {
//    return (
//       <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
//          <h2 className="text-2xl font-semibold text-indigo-600 mb-3 truncate">
//             {title}
//          </h2>
//          <p className="text-sm text-gray-600 mb-3 italic">By {author}</p>
//          <p className="text-gray-800 text-base line-clamp-4 mb-4">{content}</p>

//          {/* Render Edit and Delete buttons only for admins */}
//          {isAdmin && (
//             <div className="flex justify-between items-center mt-4">
//                {/* Edit button */}
//                <Link
//                   href={`/Poems/edit?id=${id}&title=${title}&author=${author}&content=${content}`}
//                   className="text-blue-500 hover:text-blue-700 font-medium"
//                >
//                   Edit
//                </Link>

//                {/* Delete button */}
//                <button
//                   onClick={() => deletePoem(id)}
//                   className="text-red-500 hover:text-red-700 font-medium"
//                >
//                   Delete
//                </button>
//             </div>
//          )}
//       </div>
//    );
// }

'use client';
import Link from "next/link";

type PoemModel = { 
  id: string; 
  title: string; 
  author: string; 
  content: string; 
  deletePoem: (id: string) => void;
  isAdmin: boolean; // Check if the user is an admin
};

export default function PoemModel({ id, title, author, content, deletePoem, isAdmin }: PoemModel) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-300 hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 truncate">
        {title}
      </h2>
      <p className="text-sm text-gray-600 mb-3 italic">By {author}</p>
      <p className="text-gray-800 text-base line-clamp-4 mb-4">{content}</p>

      {/* Render Edit and Delete buttons only for admins */}
      {isAdmin && (
        <div className="flex justify-between items-center mt-4">
          {/* Edit button */}
          <Link
            href={`/Poems/edit?id=${id}&title=${title}&author=${author}&content=${content}`}
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Edit
          </Link>

          {/* Delete button */}
          <button
            onClick={() => deletePoem(id)}
            className="text-red-500 hover:text-red-700 font-medium"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
