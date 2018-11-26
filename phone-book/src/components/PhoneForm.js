import React, {Component} from 'react';

class PhoneForm extends Component{
    state = {
        name:'',
        phone:''
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        this.props.onCreate(this.state); // onCreate를 통해 state를 부모에게 전달
        this.setState({ // state 초기화
            name:'',
            phone:''
        })
    }

    render() {
        const {name, phone} = this.state; 
        const {handleChange, handleSubmit} = this;

        return (
            <form onSubmit={handleSubmit}>
                <input placeholder="이름"
                       name="name"
                       value={name}
                       onChange={handleChange}
                />
                <input placeholder="전화번호" 
                       name="phone"
                       value={phone}
                       onChange={handleChange}
                />
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;