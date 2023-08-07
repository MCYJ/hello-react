import React, { useState } from "react";

// 배열 수정은 해당 배열을 직접수정하지 않고
// .filter .concat과 같이 새로운 배열을 생성하는 내장메소드를 활용

const IterationSample = () => {
  // index를 key로 사용하는 것은 비효율적
  /*     const names = ['눈사람', '얼음', '눈', '바람'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>)
    return <ul>{nameList}</ul> */

  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  // onRemove: 삭제함수
  const onRemove = (id) => {
    // array.filter를 통해 새로운 배열 생성
    const nextNames = names.filter((name) => name.id !== id);
    // 새로운 배열 반영
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
