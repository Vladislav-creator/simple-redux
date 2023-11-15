import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { createStore} from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  cash: 0,
}
// action = {type: "", payload: "?"}
const reduser = (state = defaultState, action) => {
switch(action.type) {
case 'ADD_CASH':
  return{...state, cash: state.cash + action.payload}
case 'GET_CASH':
  return{...state, cash: state.cash - action.payload}
  default:
    return state
}
}
const store = createStore(reduser);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store = {store}>
  <App />
</Provider>
</React.StrictMode>
);
