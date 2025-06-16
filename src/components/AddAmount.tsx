import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import {
  incrementAsync,
  incrementByAmount
} from '../features/counter/counterSlice';
import Button from './Button';

const AddAmount = () => {
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const incrementValue = Number(incrementAmount) || 0;

  const disptach = useAppDispatch();
  return (
    <div className="flex gap-4">
      <input
        className="text-center w-[4em] rounded-xl border-4 border-amber-950 py-2 font-mono font-bold text-xl lg:text-2xl"
        arial-label="set increment amount"
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <Button onClick={() => disptach(incrementByAmount(incrementValue))}>
        Add Amount
      </Button>
      <Button onClick={() => disptach(incrementAsync(incrementValue))}>
        Async
      </Button>
    </div>
  );
};

export default AddAmount;
