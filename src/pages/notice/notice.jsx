import React,{Component} from 'react'
import '@/pages/notice/notice.less'
// import {browserHistory} from 'react-router-dom' 
import { createHashHistory } from 'history';

import  Headers from "@/components/header/header"

import dot from "@/assets/dot.png";

// 公告列表
class notice extends Component{

    constructor(props){

        super(props)
        this.state = {
            title:"测试标题",
            created:"2019/07/26",
            list:[
                {
                    title:"测试标题",
                    created:"2019/07/26"
                },{
                    title:"测试标题",
                    created:"2019/07/26"
                },
                {
                    title:"测试标题",
                    created:"2019/07/26"
                }
            ]
        }
        this.nextNotice = this.nextNotice.bind(this);
        this.noticelist = this.noticelist.bind(this);
      }
      componentDidMount(){

      }
      noticelist(){
        // let stations = new Array(); // 站点数组
        // Http.post({
        //     'url' :  "/afs/pms/getNoticeInfoList",
        //     'data': {},
        //     'success': function(res) {

        //             // localStorage.setItem("infoDetail", noticeInfo);

        //     },
        //     'error': function(error) {
        //         alert("暂时无法查看"+error);
        //     }
        // });
      }
      nextNotice(){
        const history = createHashHistory();
        history.push({pathname:'/notice/noticeInfo', state : { deliveryPrice: "this.props.deliveryPrice" }})
      }
	render(){
		return (
			<div className="notice">
				<Headers title="公告" />
                <div className="code">
                    {
                        this.state.list.map((item,index) => {
                            return(
                                // <Link to="/notice/noticeInfo" className="grid-demo"  >
                                    <div className="row" key={"noticelist"+index} onClick={this.nextNotice}>
                                        <div className="col-10">
                                            <img src={dot} className="img" alt=""/>
                                        </div>
                                        <div className="col-90" id="cell" info="{{$value}}">
                                            <span className="cell_name">{item.title}</span>
                                            <span className="time-img"></span>
                                            <span className="cell_time">{item.created}</span>
                                        </div>
                                    </div>
                                // </Link>
                            )

                        })
                    }

                </div>
			</div>
		  );
	}

}

export default notice