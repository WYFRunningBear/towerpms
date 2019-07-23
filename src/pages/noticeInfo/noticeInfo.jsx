import React,{Component} from 'react'
import  Headers from "@/components/header/header"
import '@/pages/noticeInfo/noticeInfo.less'



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
				<div className="list">
                <div className="list-block media-list">
						<ul>
							<li>
								<a href="#" className="item item-content">
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
										<i className="notic4"></i>
										<div id="downwj" className="notic5">
											<span>
                                                <div className="notic51">附件：
                                                    <span id="wjtit">{this.state.wjtit}</span>
                                                </div>
                                                <button id="download" className="notic52">下载</button>
											</span>
										</div>

									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				
			</div>
		  );
	}

}

export default noticeInfo