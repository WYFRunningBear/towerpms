import React, {Component} from 'react'

import "babel-polyfill";
import  '@/style/mixin.less';
import './header.less'
//头部图片
import cssbacktop from "@/assets/back.png"
// import { connect } from 'react-redux'
import history from '@/history';
class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.title,
      right: '',
      goBack: '',
      goHome: '',
      edit: '',
      userInfo: '',
      guanbinone:this.props.guanbinone?"guanbinone":''
    };
    this.handBack = this.handBack.bind(this)
  }

  handBack = () => {
    console.log(history)
    // const history = creatHistory();
    // history.goBack();
    // this.props.history.go(-1)
    history.go(-1)
  }
  handClone = () => {
    console.log("关闭")

  }
  // shouldComponentUpdate(nextProps, nextState) {
  //  // 判断是否要更新render, return true 更新  return false不更新
   
  // }
  render () {
    return (
      <header className="header-container">
        <div className="header-left">
            <div  className="backwrap">
                <img className="backimg"  src={cssbacktop} onClick={this.handBack} alt="" />
                <span className="back" onClick={this.handBack}>返回</span>
                <span  className={"guanbi " + this.state.guanbinone} onClick={this.handClone}>关闭</span>
            </div>

        </div>
        <div className="header-title">{this.state.title}</div>
        <div className="header-right">{this.state.right}</div>
      </header>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     userInfo: state.userInfo
//   }
// }

export default Header
//  connect(mapStateToProps,{})(Header)