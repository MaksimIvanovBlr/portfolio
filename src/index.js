import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./storage/finStore/UserStore";
import UserInfo from "./storage/finStore/UserInfo";
import Expenses from "./storage/finStore/Expenses";
import Salary from "./storage/finStore/Salary";
import AdditionalIncome from "./storage/finStore/AdditionalIncome";


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value = {{
          user: new UserStore(),
          userInfo: new UserInfo(),
          expenses: new Expenses(),
          salary: new Salary(),
          additionalIncome: new AdditionalIncome()

      }} >
          <App />
      </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
