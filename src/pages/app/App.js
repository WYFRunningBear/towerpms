import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '@/assets/logo.svg';
import '@/pages/app/App.css';
import http from '@/config/http'
import { Button,Badge } from 'antd-mobile';
import  Headers from "@/components/header/header"

//图片
import bannerImg from "@/assets/banner.png"
import thing1 from "@/assets/thing1.png"
import thing2 from "@/assets/thing2.png"
import thing3 from "@/assets/thing3.png"
import thing4 from "@/assets/thing4.png"
import xinquire from "@/assets/xinquire.png"
import cinquire from "@/assets/cinquire.png"
import supervision from "@/assets/supervision.png"
import help from "@/assets/help.png"
import suggest from "@/assets/suggest.png"

// 首页
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gonggao:"发布一条公告"
    }
  }

  componentDidMount () {
    http.post({
      url: "main_service/adminLog/selectAdminLog",
      data: {
        "page": 1,
        "size":1
      },
      success: function(res) {
        console.log(res)
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
  render() {

    return (
      <div className="App">
        <Headers title="项目管理"/>
        <article className="App-article">
         <img className="banner" src={bannerImg} alt="" />
					<div className="banner-bottom" >
						<a className="external" href="noticeInfo.html">
							<div className="banner-bottom-box">
								<div className="notice"></div>
								<p className="message">{this.state.gonggao}</p>
							</div>
						</a>
						<a href="notice.html" className="more">更多</a>
					</div>
            {/* 四个工作台 */}
           <div className="project">
						<div className="col-25">
            <Link className="item" to='/todolist'>
								<div className="item-img">
									<img src={thing1} alt="" />
								</div>
								<p className="item-text">待办事项</p>
            </Link>

						</div>
						<div className="col-25">
							<a className="item" href="run-matters.html">
								<div className="item-img">
									<img src={thing2} alt="" />
								</div>
								<p className="item-text">已办事项</p>
							</a>
						</div>
						<div className="col-25">
							<a className="item" href="readlist2.html">
								<div className="item-img">
									<img src={thing3} alt="" />
								</div>
								<p className="item-text">待阅事项</p>
							</a>
						</div>
						<div className="col-25">
							<a className="item " href="readedlist2.html">
								<div className="item-img">
									<img src={thing4} alt="" />
								</div>
								<p className="item-text">已阅事项</p>
							</a>
						</div>
          </div>
            {/* <!-- 常用功能 --> */}
            <div className="common">
              <div className="common-title">常用功能</div>
              <div className="common-box">
                <div className="sm-box">
                  <a className="box-item " href="prjquery.html">
                    <div className="box-img">
                      <img src={xinquire} alt="" />
                    </div>
                    <p className="box-text">项目查询</p>
                  </a>
                </div>
                <div className="sm-box">
                  <a className="box-item" href="prjcancle.html">
                    <div className="box-img">
                      <img src={cinquire} alt="" />
                    </div>
                    <p className="box-text">销项查询</p>
                  </a>
                </div>
                <div className="sm-box">
                  <a className="box-item external" href="quality-control.html">
                    <div className="box-img">
                      <img src={supervision} alt="" />
                    </div>
                    <p className="box-text">质检汇总</p>
                  </a>
                </div>
                <div className="sm-box">
                  <a className="box-item" id="help">
                    <div className="box-img">
                      <img src={help} alt="" />
                    </div>
                    <p className="box-text">帮助文档</p>
                  </a>
                </div>
                <div className="sm-box">
                  <a className="box-item"href="complaint-proposal.html">
                    <div className="box-img">
                      <img src={suggest} alt="" />
                    </div>
                    <p className="box-text">投诉建议</p>
                  </a>
                </div>
              </div>
    
             </div>
             
        </article>
      </div>
    );
  }
}
export default App;
