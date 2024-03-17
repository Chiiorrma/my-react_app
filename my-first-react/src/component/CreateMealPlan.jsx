import React from "react"
export default function CreateMealPlan() {
  return <div>
    <h1 className="text-2xl font-bold mb-4">Create meal plan</h1>
    <p>Personal dietary record</p>

    <div className="flex flex-col justify-center lg:items-center min-h-screen     px-4">
      <h2 className="text-2xl font-extrabold mb-4">How about dislikes?</h2>
      <div className="lg:text-center lg:max-w-lg">
      </div>
    </div>
    <button
      className="px-4 py-2 w-1/2 md:w-80 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold"
    >
      Edit dietary records
    </button>
    <br />
    <button
      className="px-4 py-2 w-1/2 md:w-80 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold"
    >
      Proceed
    </button>
  </div>
}