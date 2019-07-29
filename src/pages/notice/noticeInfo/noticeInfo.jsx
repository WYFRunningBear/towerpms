import React,{Component} from 'react'
import  Headers from "@/components/header/header"
import '@/pages/notice/noticeInfo/noticeInfo.less'


// 公告详情
class noticeInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
				{
					SIGNL:"LC",
					TASKTITLE:"中国铁塔四川分公司成都2017年双流机场新货运站主动规划铁塔类项目",
					SENDDATETIME:"2019-07-21 22:14:00"
				},{
					SIGNL:"ZG",
					TASKTITLE:"中国铁塔四川分公司成都2017年双流机场新货运站主动规划铁塔类项目",
					SENDDATETIME:"2019-07-21 22:14:00"
				},{
					SIGNL:"GJ",
					TASKTITLE:"中国铁塔四川分公司成都2017年双流机场新货运站主动规划铁塔类项目",
					SENDDATETIME:"2019-07-21 22:14:00"
				}
            ],
            noticeTitle:"服务商铁塔认证门户登录操作步骤",
            noticeTime:"2017/03/29",
            typeface:"设计、地勘、监理服务商便用铁塔公司项目管理系统登陆步骤操作。请结合系统便用手册使用系统。",
            wjtit:"服务商铁塔认证门户登录操作步骤_docx"
        }
      }
    
	render(){
		return (
			<div className="noticeInfo">
				<Headers title="公告" />
                <div className=" media-list">
						<div className="item-inner">
							<div className="item-title-row" >
								<div className="item-title" id="noticeTitle" >{this.state.typeface}</div>
							</div>
							<div className="item-text" >
								<span className="time-img">
								<img className="item-teximg" src="time.png" alt=""/>
							</span>
								<span className="cell_time" id="noticeTime" >{this.state.noticeTime}</span>
							</div>
							<div className="notic3" >
								<span id="typeface" className="notic31">
									{this.state.typeface}
								</span>
							</div>
							<div id="downwj" className="notic4">
								<span>
									<div className="notic41">附件：
										<span id="wjtit">{this.state.wjtit}</span>
									</div>
									<button id="download" className="notic42">下载</button>
								</span>
							</div>

						</div>
				</div>
			</div>
		);
	}

}

export default noticeInfo