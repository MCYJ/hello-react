import React, { useReducer } from "react";
import useInputs from "./useInputs";

/* function reducer(state, action) {
    // dispatch의 매개변수로 들어온 e.target의 name이 호출됨
    // name => input의 name 속성명
    // console.log(action.name);
    return {
        ...state,
        [action.name]: action.value
    };
} */

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;
    /* const onChange = e => {
        dispatch(e.target);
        // e.target => event가 일어난 tag 전체
        // console.log(e.target);
    }; */

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}></input>
                <input name="nickname" value={nickname} onChange={onChange}></input>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임: </b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;