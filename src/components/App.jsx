 import {Counter, CounterFlex, ButtonCounter, Cash} from './App.module'
import { useDispatch, useSelector } from 'react-redux';
export const App = () => {
const dispatch = useDispatch()
const cash = useSelector( state => state.cash)

const addCash = (cash) => {
  dispatch({type:'ADD_CASH', payload: cash})
}
const getCash = (cash) => {
  dispatch({type:'GET_CASH', payload: cash})
}

  return (
    <Counter>
      <CounterFlex>
<ButtonCounter onClick={()=> addCash(Number(prompt()))}>Пополнить счет</ButtonCounter>
<Cash>{cash}</Cash>
<ButtonCounter onClick={()=> getCash(Number(prompt()))}>Снять со счета</ButtonCounter>
      </CounterFlex>
    </Counter>
  );
};
