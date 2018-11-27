import React, {Component, Fragment} from 'react';

class PhoneInfo extends Component{
    static defaultProps = {
        /* 
            info 객체를 props로 받아와서 렌더링
            info값 전달하기를 깜빡하면 컴포넌트는 크래쉬 될 것.
            (info가 undefined일 때는 비구조화 할당으로 내부의 값을 받아올 수 없기 때문)
            그렇기 때문에 defaultProps를 통하여 info의 기본값 설정 
        */
        info : {
            name:'이름',
            phone:'010-0000-0000',
            id:0
        }
    }

    /* 
        수정 버튼을 눌렀을 때 editing 값을 true로 설정해줄 것.
        이 값이 true일 때는 input 형태로 보여줌
        (기존에 텍스트 형태로 보여주던 값을)

        유동적인 input의 값을 담기 위해 각 필드를 위한 값도 설정
    */
    state = {
        editing:false,
        name:'',
        phone:''
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!this.state.editing
           && !nextState.editing 
           && nextProps.info === this.props.info) {
            // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함    
            return false; 
        } else {
            return true; // 나머지 경우엔 리렌더링 함
        }
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id); // 삭제 버튼이 클릭되면 onRemove에 id를 넣어 호출
    }

    // editing 값을 반전시키는 함수
    handleToggleEdit = () => {
        const { info, onUpdate } = this.props;
        const { editing, name, phone } = this.state
          
        if(editing) { // editing이 true일 때
            onUpdate(info.id, { // onUpdate 호출 후 state값 넘겨줌(변경할 값)
                name:name,
                phone:phone
            })
        } else { // editing이 false일 때
            this.setState({ // info.name, info.phone을 state값으로 설정
                name:info.name,
                phone:info.phone
            })
        }
        this.setState({
            // true -> false
            // false -> true
            editing:!editing
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    }

    render() {
        const style = {
            border:'1px solid #000',
            margin:'8px',
            padding:'8px'
        }

        const { name, phone, id } = this.props.info;
        const { handleRemove, handleToggleEdit, handleChange } = this;
        const { editing } = this.state;

        console.log('render PhoneInfo' + id);

        return (
            <div style={style}>
                {editing 
                ? (
                    <Fragment>
                        <div>
                            <input name="name"
                                   value={this.state.name}
                                   onChange={handleChange} />
                            <input name="phone"
                                   value={this.state.phone}
                                   onChange={handleChange} />
                        </div>
                    </Fragment>
                  ) 
                : (
                    <Fragment>
                        <div><b>{name}</b></div>
                        <div>{phone}</div>
                    </Fragment>
                )}
                <button onClick={handleToggleEdit}>
                    {editing ? '적용' : '수정'}
                </button>
                <button onClick={handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;