import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2;
  state = {
    information : [
      {id:0, name:'문주영', phone:'010-1234-5678'},
      {id:1, name:'홍길동', phone:'010-2345-6789'}
    ],
    keyword:''
  }
  
  handleChange = (e) => {
      this.setState({
          keyword:e.target.value
      })
  }

  /*
      부모 컴포넌트에게 정보 전달하기
      1) 부모 컴포넌트에서 메소드 만들기(handleCreate)
      2) 메소드를 자식에게 전달 <PhoneForm onCreate={handleCreate} />
      3) 자식 내부에서 호출함
  */   
  handleCreate = (data) => {
      // console.log(data);
      const { information } = this.state;
      this.setState({
          information : information.concat({id:this.id++, ...data})
      })
  }

  handleRemove = (id) => {
      const { information } = this.state;
      this.setState({
          information : information.filter(info => info.id !== id)
      })
  }

  handleUpdate = (id, data) => {
      const { information } = this.state;
      this.setState({
          information : information.map(
              info => id === info.id 
              ? {...info, ...data} // 새 객체를 만들어서 기존의 값과 전달받은 dta를 덮어 씀
              : info // 기존의 값을 그대로 유지
          )
      })
  }
  
  render() {
    const { information, keyword } = this.state;
    const { handleChange, handleCreate, handleRemove, handleUpdate } = this;
    const filteredList = information.filter(
        info => info.name.indexOf(keyword) !== -1
    )

    return (
        <div>
            <PhoneForm onCreate={handleCreate} />
            <p>
                <input value={keyword} 
                       onChange={handleChange}
                       placeholder='검색할 이름을 입력하세요.'/>
            </p>
            <hr />
            <PhoneInfoList data={filteredList} onRemove={handleRemove} onUpdate={handleUpdate} />
        </div>
    );
  }
}

export default App;
