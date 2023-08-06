import "./App.css";
import { Component, Fragment } from "react";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import ScrollBox from "./ScrollBox";

class App extends Component {
  // class 형 component에는 render()함수가 꼭 있어야 함
  render() {
    const name = "리액트";
    return (
      // div가 아닌 Frangment tag를 활용하여 tree를 묶음
      <Fragment>
        {/* {name === "리액트" ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h1>리액트가 아닙니다.</h1>
        )}
*/}
        {/* <ValidationSample></ValidationSample> */}

        {/* <MyComponent name="김철수" favoriteNumber={10}>어린이</MyComponent> */}
        {/* <MyComponent name={"react"} favoriteNumber={47}>김철수</MyComponent> */}

        {/* <Say></Say>
        <Counter></Counter> */}

        {/* <EventPractice></EventPractice> */}

        <ScrollBox ref={(ref) => this.ScrollBox=ref}></ScrollBox>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </Fragment>
    );
  }
}

export default App;
