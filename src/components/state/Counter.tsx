import { useReducer } from "react"

type CounterState = {
   count: number,
}

type CounterAction = {
   type: 'increment'|'decrement',
   payload: number,
}

const initialState = {count: 0};
const reducer = (state: CounterState, action: CounterAction) => {
   switch (action.type){
      case 'increment':
         return { count: state.count + action.payload }
      case 'decrement':
         return { count: state.count - action.payload }
      default:
         return state;
   }
}

const Counter = () => {
   const [state , dispatch] = useReducer(reducer, initialState)
   return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment' , payload: 2})}>
           Increment 2
        </button>
        <button onClick={() => dispatch({type: 'decrement' , payload: 2})}>
           Decrement 2
        </button>
      </>
   )
}

export default Counter