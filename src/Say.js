import React, {useState} from "react";

const Say = () => {
    // 1st parameter : state, 현재상태
    // 2nd parameter : setter function, 상태를 바꿔주는 함수
    const [message, setMessage] = useState('입력안됨');
    // setMessage('아무것도 입력안됨');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;