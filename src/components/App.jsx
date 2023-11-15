import {Counter, CounterFlex} from './App.module'
import { useDispatch, useSelector } from 'react-redux';
export const App = () => {
const dispatch = useDispatch()
const cash = useSelector( state => state.cash)
// console.log(cash);
const addCash = (cash) => {
  dispatch({type:'ADD_CASH', payload: cash})
}
const getCash = (cash) => {
  dispatch({type:'GET_CASH', payload: cash})
}

  return (
    <Counter>
      <CounterFlex>
<button onClick={()=> addCash(Number(prompt()))}>Пополнить счет</button>
<div>{cash}</div>
<button onClick={()=> getCash(Number(prompt()))}>Снять со счета</button>
      </CounterFlex>
    </Counter>
  );
};
// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}

// style={{display: 'flex'}}