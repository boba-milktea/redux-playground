import { decrement, increment, reset, selectCount } from './counterSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
//components
import Button from '../../components/Button';
import Display from '../../components/Display';
import AddAmount from '../../components/AddAmount';

const Counter = () => {
  const countValue = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="flex flex-col gap-8 p-8 items-center border-2 border-amber-100 shadow-lg shadow-amber-800">
      <Display value={countValue} />
      <div className="flex gap-4">
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={handleReset}>reset</Button>
        <Button onClick={handleDecrement}>-</Button>
      </div>
      <AddAmount />
    </div>
  );
};

export default Counter;
