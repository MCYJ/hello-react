import React, { Component } from "react";

class Counter extends Component {
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
}

export default Counter;
