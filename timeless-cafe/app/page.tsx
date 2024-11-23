

// import PaintingModel from "@/components/paintings";
// import prisma from "@/utils/db";
// import { revalidatePath } from "next/cache";
// import preExistingData from "../preExistingData";

// export default async function Home() {
//   // Function to initialize paintings only if there are no paintings in the database
//   async function initializePaintings() {
//     "use server"; // Mark as server-side

//     // Predefined painting data to add to the database
//     // const preExistingData = [
//     //   {
//     //     title: "Starry Night",
//     //     description: "A mesmerizing display of swirling skies, vibrant stars, and a tranquil village, Vincent van Gogh's *Starry Night* ",
//     //     image: "https://images.squarespace-cdn.com/content/v1/5fab2701e889c67ee31bfa4d/1614038505601-5HQPI763HMNFWJZ016EQ/SL03+LR.jpg?format=1000w",
//     //   },
//     //   {
//     //     title: "Mona Lisa",
//     //     description: "One of the most famous portraits in art history, *Mona Lisa* by Leonardo da Vinci features the enigmatic smile of its subject.",
//     //     image: "https://img.freepik.com/premium-photo/perks-brewing-unveiling-charms-coffee-shop_1000124-46738.jpg",
//     //   },
//     //   {
//     //     title: "The Persistence of Memory",
//     //     description: "Salvador Dalí’s surreal masterpiece, *The Persistence of Memory*, explores the fluidity of time and perception.",
//     //     image: "https://www.mayfairgallery.com/media/wysiwyg/paintings_main_image.jpg",
//     //   },
//     //   {
//     //     title: "Man",
//     //     description: "*Man* is a powerful exploration of the human form and the complex emotions that define our existence. ",
//     //     image: "https://museumqualityart.com/cdn/shop/products/SleepingFox_WebRes_20x16_MuseumQualityArt.jpg?v=1651930660&width=320",
//     //   },
//     //   {
//     //     title: "Man",
//     //     description: "*Man* is a powerful exploration of the human form and the complex emotions that define our existence. ",
//     //     image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436535/796067/main-image",
//     //   },
//     //   {
//     //     title: "Man",
//     //     description: "*Man* is a powerful exploration of the human form and the complex emotions that define our existence. ",
//     //     image: "https://i.ebayimg.com/images/g/yAMAAOSwrbRkF8G8/s-l1200.jpg",
//     //   },
//     // ];

//     // Check if there are any paintings in the database
//     const existingPaintings = await prisma.paintings.findMany();
//     if (existingPaintings.length === 0) {
//       // If no paintings, add the predefined data
//       await prisma.paintings.createMany({ data: preExistingData });
//       console.log("Paintings initialized");
//     } else {
//       console.log("Paintings already exist in the database.");
//     }

//     // Re-fetch paintings after initialization or check
//     const updatedData = await prisma.paintings.findMany();
//     return updatedData;
//   }

//   // Fetch paintings from the database (initializing if necessary)
//   const data = await initializePaintings();
//   console.log("Fetched paintings:", data);

//   // Function to delete a painting
//   async function deletePainting(id: string) {
//     "use server";
//     try {
//       await prisma.paintings.delete({ where: { id } });
//       revalidatePath("/"); // Revalidate path to refresh the data on the page
//     } catch (error) {
//       console.error("Error deleting painting:", error);
//       // Handle error, e.g., show a message to the user
//     }
//   }

//   return (
//     <>
//   <div className="bg-white-50 text-3xl font-semibold text-center text-blue-300 py-3">
//   Featured Paintings
// </div>

//       <div className=" bg-white-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
     
//         {data.map((item) => (
//           <PaintingModel
//             key={item.id} // Use unique `id` instead of `index`
//             id={item.id}
//             title={item.title}
//             image={item.image}
//             description={item.description}
//             deletePainting={deletePainting}
//           />
//         ))}
//       </div>
//     </>
//   );
// }


























import PaintingModel from "@/components/paintings";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import preExistingData from "../preExistingData";
import Link from 'next/link'; // Import Link component

export default async function Home() {
  async function initializePaintings() {
    "use server"; // Server-side function

    try {
      // Check if paintings already exist
      const existingPaintings = await prisma.paintings.findMany();

      if (existingPaintings.length === 0) {
        // Add predefined paintings if none exist
        await prisma.paintings.createMany({ data: preExistingData });
        console.log("Paintings initialized");
      } else {
        console.log("Paintings already exist in the database.");
      }

      // Return updated paintings
      return prisma.paintings.findMany();
    } catch (error) {
      console.error("Error initializing paintings:", error);
      return [];
    }
  }

  const paintings = await initializePaintings();

  async function deletePainting(id: string) {
    "use server";
    try {
      await prisma.paintings.delete({ where: { id } });
      revalidatePath("/");
    } catch (error) {
      console.error("Error deleting painting:", error);
    }
  }

  return (
    <div>
      <h1 className="bg-white text-3xl font-semibold text-center text-blue-300 py-3">
        Featured Paintings
      </h1>
      <div className="bg-white-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
  {paintings.map((painting) => (
    <div key={painting.id}>
      {/* Wrap title in Link to detail page */}
      
      <PaintingModel
        id={painting.id}
        title={painting.title}
        image={painting.image}
        description={painting.description}
        deletePainting={deletePainting}
      />
      <Link href={`/param/${encodeURIComponent(painting.title)}`}>
        <h2 className="text-xl border-2 text-center font-bold text-blue-500 cursor-pointer">
          See more
        </h2>
      </Link>
    </div>
  ))}
</div>

    </div>
  );
}


// import PaintingModel from "@/components/paintings";
// import prisma from "@/utils/db";
// import { revalidatePath } from "next/cache";

// export default async function Home() {
//   // Function to initialize paintings only if there are no paintings in the database
//   async function initializePaintings() {
//     "use server"; // Mark as server-side

//     const preExistingData = [
//       {
//         title: "Starry Night",
//         description: "Starrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vsm9iTVvq-vRO2dnatFcBlVELkteM4JbtA&s",
//       },
//       {
//         title: "Mona Lisa",
//         description: "Updated description for Mona Lisa",
//         image: "https://img.freepik.com/premium-photo/perks-brewing-unveiling-charms-coffee-shop_1000124-46738.jpg",
//       },
//       {
//         title: "The Persistence of Memory",
//         description: "Updated description for The Persistence of Memory",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vsm9iTVvq-vRO2dnatFcBlVELkteM4JbtA&s",
//       },
//       {
//         title: "Man",
//         description: "Updated description for Man",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vsm9iTVvq-vRO2dnatFcBlVELkteM4JbtA&s",
//       },
//       {
//         title: "Man",
//         description: "Updated description for Man",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vsm9iTVvq-vRO2dnatFcBlVELkteM4JbtA&s",
//       },
//       {
//         title: "Man",
//         description: "Updated description for Man",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vsm9iTVvq-vRO2dnatFcBlVELkteM4JbtA&s",
//       },
//     ];

  
//       await prisma.paintings.createMany({ data: preExistingData });
//       console.log("Paintings initialized");
   
//     // Re-fetch paintings after initialization or update
//     const updatedData = await prisma.paintings.findMany();
//     return updatedData;
//   }

//   // Fetch paintings from the database (initializing if necessary)
//   const data = await initializePaintings();
//   console.log("Fetched paintings:", data);

//   // Function to delete a painting
//   async function deletePainting(id: string) {
//     "use server";
//     try {
//       await prisma.paintings.delete({ where: { id } });
//       revalidatePath("/"); // Revalidate path to refresh the data on the page
//     } catch (error) {
//       console.error("Error deleting painting:", error);
//       // Handle error, e.g., show a message to the user
//     }
//   }

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {data.map((item) => (
//           <PaintingModel
//             key={item.id} // Use unique `id` instead of `index`
//             id={item.id}
//             title={item.title}
//             image={item.image}
//             description={item.description}
//             deletePainting={deletePainting}
//           />
//         ))}
//       </div>
//     </>
//   );
// }



// export default function Home() {
//   useEffect(() => {
//     const text = document.querySelector(".rotating-text") as HTMLElement | null;

//     if (text) {
//       const textContent = text.innerText.split("");
      
//       // Rotate each character of text
//       text.innerHTML = textContent
//         .map((char, i) =>
//           `<span style="transform: rotate(${i * 10.3}deg); position: absolute; top: 50%; left: 50%; transform-origin: 0 100px;">${char}</span>`
//         )
//         .join("");

//       // Add image rotation at the end of the text
//       const imageElement = `<span style="transform: rotate(${textContent.length * 10.3}deg); position: absolute; top: 50%; left: 50%; transform-origin: 0 100px;">
//         <img src="https://svgsilh.com/svg/309981.svg" margin-left="20px" width="70" height="70" alt="Portal Icon" />
//       </span>`;

//       // Add the image to the text container
//       text.innerHTML += imageElement;
//     }
//   }, []);

//   return (
//     <div className="bg-slate-50 h-screen flex flex-col ">
//       <h1 className="text-indigo-900 text-3xl mb-4 text-center">
//         Welcome to the <span>Timeless Cafe</span>
//       </h1>
//       <div className="text-indigo-900 mb-6 text-center">Enter the Cafe!</div>

//       <div className="flex justify-between items-center  ">
//         {/* Left side: Image */}
//         <div className="flex-shrink-0">
//           {/* <Image
//             src="https://img.freepik.com/premium-photo/perks-brewing-unveiling-charms-coffee-shop_1000124-46738.jpg"
//             height={800}
//             width={800}
//             priority
//             alt="Cafe Image"
//           /> */}
//         </div>

//         {/* Right side: Rotating Text Circle */}
//         <div className="flex">
//           <div className=" rotating-text font-bold text-lg flex"
//             style={{ animation: "rotate 8s linear infinite" }}
//           >
//             Enter the Timeless Cafe Portal
           

//             <Image
//               src="https://svgsilh.com/svg/309981.svg"
//               width={100}
//               height={100}
//               alt="Portal Icon"
//             />
// </div>

//           </div>
          
//           <Image
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTAcgpkAHR63lOe2Yjj7m-dfmN24W_ydI78ABqRla6wvzDkPEQTJ9ADoChyZU3if__3wpOS06y5-6tiqCCb8ajaVR7vE_-v9UeezpwPk"
//               width={300}
//               height={300}
//               alt="Portal Icon"
//             />
//               <Image
//               src="https://www.moma.org/d/assets/W1siZiIsIjIwMjIvMDQvMDUvNTdnMml4eThtb180NzJfMTk0MV9DQ0NSX1ByZXNzX1NpdGUuanBnIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDkwIC1yZXNpemUgMTE4NHg2NjZeIC1ncmF2aXR5IE5vcnRoIC1jcm9wIDExODR4NjY2KzArNzkiXV0/472_1941_CCCR-Press%20Site.jpg?sha=5bdb603f03db6661"
//               width={300}
//               height={300}
//               alt="Portal Icon"
//             />
//                <Image
//               src="https://i0.wp.com/ascholarlyskater.com/wp-content/uploads/2018/05/angelica-kauffmann-cornelia-tiny.jpg?resize=1538%2C1217&ssl=1"
//               width={300}
//               height={300}
//               alt="Portal Icon"
//             />
//             <Image
//               src="https://www.moma.org/d/assets/W1siZiIsIjIwMjIvMDQvMDUvNTdnMml4eThtb180NzJfMTk0MV9DQ0NSX1ByZXNzX1NpdGUuanBnIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDkwIC1yZXNpemUgMTE4NHg2NjZeIC1ncmF2aXR5IE5vcnRoIC1jcm9wIDExODR4NjY2KzArNzkiXV0/472_1941_CCCR-Press%20Site.jpg?sha=5bdb603f03db6661"
//               width={300}
//               height={300}
//               alt="Portal Icon"
//             />
          
          
        
//       </div>

      
//     </div>
//   );
// }
