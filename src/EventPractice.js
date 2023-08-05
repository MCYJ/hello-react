import userEvent from "@testing-library/user-event";
import React, {Component, useState} from "react";

// class 형 component
/* class EventPractice extends Component {
    state = {
        message: '',
        username: ''
    }

    constructor(props){
        super(props);
        // component 호출되는 곳을 기준으로 this를 참조하기 때문에
        // 아래와 같이 bind가 필요
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    // babel: transform-class-properties 문법
    handleChange = (e) => {
        this.setState({
            // event가 일어난 target의 name을 key값으로 state 값 변경 진행
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message+':'+this.state.username);
        this.setState({
            message: '',
            username: ''
        });
    }
    handleKeyPress = (e) => {
        if(e.key === "Enter"){
            this.handleClick();
        }
    }
    render(){
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="username"
                placeholder="아무거나 입력해 보세요"
                value={this.state.username}
                onChange={this.handleChange}
                onkeydown={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>
                    확인
                </button>
            </div>
        );
    }
} */

// function 형 component
const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
/*     const [username, setUsername] = useState('');
    const [message, setMessage] = useState(''); */
    const {username, message} = form;
/*     const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value); */
    const onClick = () => {
        alert(username + ': ' + message);
/*         setUsername('');
        setMessage(''); */
    };
    


    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm);
    };

    const onkeydown = e => {
        if (e.key == 'Enter') onClick();

    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input 
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;