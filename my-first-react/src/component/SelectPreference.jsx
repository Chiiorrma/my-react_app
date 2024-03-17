import React from "react"
export default function SelectPreference() {
  return <div>
    <h1 className="text-2xl font-bold mb-4">Select preferences</h1>
    <p> Add more tham one item that you like</p>
    <div className="min-h-screen w-screen px-4 flex flex-col justify-center lg:items-center">
      <h2 className="mb-8 w-full text-3xl font-bold text-left lg:text-center">
        Pick your Diet
      </h2>
    </div>
    <div className="flex flex-col gap-2">

    </div>
    <button
      className="px-4 py-2 w-1/2 md:w-80 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold"
    >
      Generate meal plan
    </button>

  </div>
}