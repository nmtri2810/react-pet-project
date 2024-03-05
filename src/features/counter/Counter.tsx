import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/app/store'
import { decrement, increment } from './counterSlice'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <span className='mx-5'>{count}</span>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
