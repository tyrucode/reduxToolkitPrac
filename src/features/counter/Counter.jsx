import React from 'react'
//to use our slice we need Selector and Dispatch
import { useSelector, useDispatch } from 'react-redux'
//import our actions we created in the reducer(counterSlice)
import { increment, decrement, reset, double, incrementByAmount } from './counterSlice'
//getting state for our payload for the amount we are incrementing by
import { useState  } from 'react'

const counter = () => {
    //adding state to component         (state.nameOfFunction.nameOfReducerBeingUsed)
    const count = useSelector((state) => state.counter.count)
    //setting dispatch up to useDispatch
    const dispatch = useDispatch();
    //state for increment amount payload
    const [incrementAmount, setIncrementAmount] = useState(0)
    //unrelated but kinda related
    //ensures a number is added because if its not itll be 0 instead 
    const addValue = Number(incrementAmount) || 0;
    //function 
    const resetAll = () => {
      //sets increment STATE (not the redux one) back to 0
      setIncrementAmount(0)
      //resets actual redux counter to 0 by dispatching reset like we do in our buttons
      dispatch(reset());
    }


  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(double())}>double</button>
        </div>
        <input
         type="text" 
         value={incrementAmount} 
        //  sets our increment amount in the box as whatever we type
         onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          {/* we added addValue here to make sure its a number */}
          <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
          <button onClick={resetAll}>Reset</button>
        </div>
    </section>
  )
}

export default counter