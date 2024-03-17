import React from "react";

export default function FeedBackPage() {
  return <div>
    <h1 className="text-2xl font-bold mb-6 text-left"> Share your feedback</h1>
    <p className="text-left"> How satisfied are you with the variety of meal available on the app?</p>
    <br />
    <p className="text-left text-blur mb-5">Select from list</p>

    <div className='flex flex-col gap-y-2 mb-5'>
      <div className='flex gap-2'>
        <input type="checkbox" id="Very satisfied" className='w-6 h-6' />
        <label htmlFor="Very satisfied">Very satisfied</label>
      </div>
      <div className='flex gap-2'>
        <input type="checkbox" id="Somewhat satisfied" className='w-6 h-6' />
        <label htmlFor="Somewhat satisfied">Somewhat satisfied</label>
      </div>
      <div className='flex gap-2'>
        <input type="checkbox" id="Neutral" className='w-6 h-6' />
        <label htmlFor="Neutral">Neutral</label>
      </div>
      <div className='flex gap-2'>
        <input type="checkbox" id="Somewhat dissastisfied" className='w-6 h-6' />
        <label htmlFor="Somewhat dissastisfied">Somewhat dissastisfied</label>
      </div>
      <div className='flex gap-2'>
        <input type="checkbox" id="Very dissatisfied" className='w-6 h-6' />
        <label htmlFor="Very dissatisfied">Very dissatisfied</label>
      </div>
    </div>
    <p className="text-left"> Please share any additonal comments or suggestions to help us improve your experience with MealPal</p>
    <br />
    <input className="align-left border w-50 h-24" type="text" name="" id="" width={100} height={100} placeholder="Write your comment..." />
  </div>

}