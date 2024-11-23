'use client';

import { useParams } from "next/navigation";
import preExistingData from "@/preExistingData";

export default function PaintingDetail() {
  const { title } = useParams<{ title: string }>(); // Ensure title is a string

  if (!title) {
    return (
      <div className="bg-pink-50 m-6 p-6 text-red-900 rounded">
        <h1 className="text-2xl font-bold">Invalid Painting</h1>
        <button className="mt-4 p-2 bg-red-500 rounded text-white">
          <a href="/">Go Back</a>
        </button>
      </div>
    );
  }

  const decodedTitle = decodeURIComponent(title);
  const paint = preExistingData.find((item) => item.title === decodedTitle);

  if (!paint) {
    return (
      <div className="bg-pink-50 m-6 p-6 text-red-900 rounded">
        <h1 className="text-2xl font-bold">Painting Not Found</h1>
        <button className="mt-4 p-2 bg-red-500 rounded text-white">
          <a href="/">Go Back</a>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-pink-50 m-6 p-6 text-red-900 rounded">
      <h1 className="text-2xl font-bold text-red-900">{paint.title}</h1>
      <img
        src={paint.image}
        alt={paint.title}
        className="w-96 h-96 mt-4 rounded"
      />
      <p className="mt-4">
        Description: <span className="font-bold">{paint.description}</span>
      </p>
      <button className="mt-4 p-2 bg-red-500 rounded text-white">
        <a href="/">Go Back</a>
      </button>
    </div>
  );
}
