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


function AppInner(props: { number: number }) {
  const values = useHookB(props.number); 
  return (
    <div className="App">
      {values.map((v) => v)}
    </div>
  );
}

function AppOuter() {

  const number = useHookA();

  if (!number) {
    return null;
  }

  return <AppInner number={number} />
}

export default AppOuter;
