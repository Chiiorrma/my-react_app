import { useState } from 'react'
import './App.css'
import FeedBackPage from "./component/FeedBackPage"
import CreateMealPlan from './component/CreateMealPlan'
import MealSchedule from './component/MealSchedule'
import SelectPreference from './component/SelectPreference'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MealSchedule />
      <hr />
      <SelectPreference />
      <hr />
      <FeedBackPage />
      <hr />
      <CreateMealPlan />
      <hr />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
