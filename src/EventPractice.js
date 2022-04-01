import React, {Component} from "react";

class EventPractice extends Component {
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

    handleChange = (e) => {
        this.setState({
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
                onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;