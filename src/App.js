import "./App.css";
import { Component, Fragment } from "react";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import ScrollBox from "./ScrollBox";
import IterationSample from "./HandlingReact/IterationSample";
import LifeCycleSample from "./HandlingReact/LifeCycleSample";
import ErrorBoundary from "./HandlingReact/ErrorBoundary";
import Info from "./HandlingReact/Info";
import SassComponent from "./HandlingReact/SassComponent";

// 랜덤 색상 지정
function getRandomColor() {
  // 16777215를 hex로 변환하면 ffffff가 됨
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  // class 형 component에는 render()함수가 꼭 있어야 함
  render() {
    // const name = "리액트";
    return (
      // div가 아닌 Frangment tag를 활용하여 tree를 묶음 -> 문법적으로 의미는 없음
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

{/*         <Say></Say>
        <Counter></Counter> */}

        {/* <EventPractice></EventPractice> */}

        {/* <ScrollBox ref={(ref) => this.ScrollBox=ref}></ScrollBox>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button> */}

        {/* <IterationSample></IterationSample> */}

        {/* <IterationSample></IterationSample> */}

        {/* lifecycle methods */}
{/* 
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary> */}
        {/* <Info></Info> */}
        <SassComponent></SassComponent>
      </Fragment>
    );
  }
}

export default App;
