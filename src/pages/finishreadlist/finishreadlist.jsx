import React,{Component} from 'react'
import '@/pages/finishreadlist/finishreadlist.less'
import  Headers from "@/components/header/header"
import { SearchBar, PullToRefresh } from 'antd-mobile';
//图片
import dot from "@/assets/dot.png";

//已阅列表
class finishreadlist extends Component{
	constructor(props){
		super(props);
		this.state = {
			sear:"",
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
			refreshing: false,
			down: true,
			height: 510,
			data: [],
		}
		this.onChange = this.onChange.bind(this)
		this.listItem = this.listItem.bind(this)
		this.listscroll = this.listscroll.bind(this)
		
	}
	componentDidMount(){
		this.setState({
			height:document.documentElement.clientHeight
			-
			document.documentElement.querySelectorAll(".header-container")[0].clientHeight
			-
			44

		});
	}
	onChange(val){
		this.setState({ sear:val});
	}
	listItem(index){
		let item = this.state.list[index];
		if(item.SIGNL === "GJ"){
			console.log('href="read-details.html?daiyue=待阅"')
		}else{
			console.log('Z-check-list.html?daiyue=待阅&id={{$value.PRJ_ID}}')
		}
	}
	listscroll(e){
		let ptrf  = document.documentElement.querySelector("#ptrf");
		let scrollHeight = ptrf.scrollHeight;
		let clientHeight = ptrf.clientHeight;
		let scrollTop = ptrf.scrollTop;
		if(scrollHeight - clientHeight < scrollTop + 200){
			this.setState({
				down:false
			})
		}else if(scrollTop>0&&scrollTop<=200){
			this.setState({
				down:true
			})
		}
		
	}
	render(){
		return (
			<div className="finishreadlist">
				<Headers title="已阅列表" />
				<SearchBar placeholder="搜索" value={this.state.sear} onChange={this.onChange} />
                    <div className="content"  >
					<PullToRefresh
						id="ptrf"
						onScroll={this.listscroll}
						damping={60}
						style={{
						height: this.state.height,
						overflow: 'auto',
						}}
						indicator={this.state.down ? {activate:'下拉刷新',deactivate: '下拉刷新',release:"looding",finish:"刷新完成"} : { deactivate: '上拉加载' }}
						direction={this.state.down ? 'down' : 'up'}
						refreshing={this.state.refreshing}
						onRefresh={() => {
							if(this.state.down === true){
								//下拉刷新
								console.log("下拉刷新");

							}else{
								//上拉加载
								console.log("上拉加载");

							}
						this.setState({ refreshing: true });
						setTimeout(() => {
							this.setState({ refreshing: false });
						}, 2000);
						}}
						>
						{
							this.state.list.map((item,index) => {
								return (
									<div className="code" key={'code'+index}  onClick={()=>this.listItem(index)}>
										<div className="grid-demo">
											<div className="row no-gutter" id="row">
												<div className="col-10">
													<img src={dot} className="img" alt=""/>
												</div>
												<div className="col-90">
													<span className="cell_name">{item.TASKTITLE}</span>
													<span className="time-img"></span>
													<span className="cell_time">{item.SENDDATETIME}</span>
												</div>
											</div>
										</div>
									</div>
								)
							})
						}
						</PullToRefresh>
                    </div>
			</div>
		  );
	}

}

export default finishreadlist