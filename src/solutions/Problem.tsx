import React from 'react';
import logo from './logo.svg';
import './App.css';

function useHookA(): number | null {

  const value = Math.random()
  if (value > 0.5) {
    return value;
  }
  else {
    return null;
  }
}


function useHookB(value: number): Array<string> {

  const nValues = Math.floor(value * 10);
  return new Array(nValues).fill(true).map((v, i) => `${i}`);

}



function App() {

  const number = useHookA(); // Returns a number | null 

  if(!number){
    return null;
  }

  const values = useHookB(number); //React Hook "useHookB" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?eslintreact-hooks/rules-of-hooks


  return (
    <div className="App">
      {values.map((v) => v)}
    </div>
  );
}

export default App;
