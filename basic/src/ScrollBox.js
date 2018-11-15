import React, { Component } from 'react';

class ScrollBox extends Component {

    scrollToBottom = () => {
        /* 
            scrollTop : 세로 스크롤바 위치(0~350)
            scrollHeight : 스크롤 박스 내부의 높이(650)
            clientHeight : 스크롤 박스 외부의 높이(300)
        */
        const{ scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render(){
        const style = {
            border:'1px solid #424242',
            width:'300px',
            height:'300px',
            overflow:'auto',
            position:'relative'
        }
        const innerStyle={
            width:'100%',
            height:'650px',
            background:'linear-gradient(pink, skyblue)'
        }
        return(
            <div style={style}
                 ref={(ref) => {this.box=ref}}>
                 <div style={innerStyle}></div>
            </div>
        )
    }
}

export default ScrollBox;