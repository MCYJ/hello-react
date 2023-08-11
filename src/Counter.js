import React, { Component, useState, useReducer } from "react";

/* class Counter extends Component {
  // 생성자를 사용하여 state 초깃값을 설정
  // constructor(props){
  //     super(props);
  //     // this. 는 super() 다음에 사용
  //     this.state = {
  //         number: 0,
  //         fixedNumber : 0
  //     };
  // }

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              (prevState) => ({ number: prevState.number + 1 }),
            //   callback func
              () => {
                console.log("set state call");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
} */

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1};
    case 'DECREMENT':
      return { value: state.value - 1};
    default:
      return state;
  }
}

const Counter = () => {
  // useState를 활용하는 경우
  // const [value, setValue] = useState(0);
  
  const [state, dispacth] = useReducer(reducer, {value: 0});

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      {/* <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button> */}
      <button onClick={() => dispacth({type: 'INCREMENT'})}>+1</button>
      <button onClick={() => dispacth({type: 'DECREMENT'})}>-1</button>
    </div>
  );
};

export default Counter;
