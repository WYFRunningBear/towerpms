import React,{Component} from 'react'
import '@/pages/todothing/todolist.less'
import  Headers from "@/components/header/header"
import { SearchBar, PullToRefresh,Button } from 'antd-mobile';
//图片
import liucheng from "@/assets/liucheng.png";
import zhenggai from "@/assets/zhenggai.png";
import guanjian from "@/assets/guanjian.png";


class todolist extends Component{
	constructor(props){
		super(props);
		this.state = {
			sear:"",
			list:[
				{
				signl:"LC",
				build_modes:"01",
				check_code:"17A12SCCD0200218",
				task_title:"中国铁塔四川分公司成都市2019年江金城意境C区改造铁塔项目",
				create_date:"2019-07-21 22:14:00"
				},{
				signl:"GJ",
				check_code:"17A12SCCD0200218",
				task_title:"中国铁塔四川分公司成都市2019年江金城意境C区改造铁塔项目",
				create_date:"2019-07-21 22:14:00"
				},{
				signl:"LC",
				build_modes:"03",
				check_code:"17A12SCCD0200218",
				task_title:"中国铁塔四川分公司成都市2019年江金城意境C区改造铁塔项目",
				create_date:"2019-07-21 22:14:00"
				},{
				signl:"ZG",
				check_code:"17A12SCCD0200218",
				task_title:"中国铁塔四川分公司成都市2019年江金城意境C区改造铁塔项目",
				create_date:"2019-07-21 22:14:00"
				},{
				signl:"",
				check_code:"17A12SCCD0200218",
				task_title:"中国铁塔四川分公司成都市2019年江金城意境C区改造铁塔项目",
				create_date:"2019-07-21 22:14:00"
				},{
				signl:"LC",
				build_modes:"08",
				check_code:"17A12SCCD0200218",
				task_title:"中国铁塔四川分公司成都市2019年江金城意境C区改造铁塔项目",
				create_date:"2019-07-21 22:14:00"
				},{
				signl:"LC",
				build_modes:"",
				check_code:"17A12SCCD0200218",
				task_title:"中国铁塔四川分公司成都市2019年江金城意境C区改造铁塔项目",
				create_date:"2019-07-21 22:14:00"
				}
			],
			refreshing: false,
			down: true,
			// height: calc(document.documentElement.clientHeight - 44px - 2.35rem) ,
			height: 510,
			data: [],
		}
		this.onChange = this.onChange.bind(this)
		this.listItem = this.listItem.bind(this)
	}
	componentDidMount(){
		this.setState({
			height:document.documentElement.clientHeight
			-
			document.documentElement.querySelectorAll(".header-container")[0].clientHeight
			-
			44
			-
			document.documentElement.querySelectorAll(".am-button")[0].offsetHeight

		})
	}
	onChange(val){
		this.setState({ sear:val});
	}
	listItem(index){
		let item = this.state.list[index];
		if(item.signl === "LC"){
			//流程代办
			if(item.build_modes === "01" || item.build_modes === "08"){
				console.log("流程新建")
			}else if(item.build_modes === "03"){
				console.log("流程改造")
			}else{
				console.log("流程自定义")
			}

		}else if(item.signl === "ZG"){
			//整改代办
			console.log("整改代办")
		}else{
			//关键代办
			console.log("关键代办")
		}
		
	}
	render(){
		return (
			<div className="todolist">
				<Headers title="待办列表" />
				<SearchBar placeholder="搜索" value={this.state.sear} onChange={this.onChange} />
                    <div className="content"  >
					<Button
						onClick={() => this.setState({ down: !this.state.down })}
					>
						direction: {this.state.down ? 'down' : 'up'}
					</Button>
					<PullToRefresh
						damping={60}
						ref={el => this.ptr = el}
						style={{
						height: this.state.height,
						overflow: 'auto',
						}}
						indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
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
									<div className="todolist-item"  onClick={()=>this.listItem(index)} key={"list"+index}>
										<div className="con">

											{
												<img src={
													item.signl=== "LC"
													?
													liucheng
													:
													item.signl==="ZG"
													?
													zhenggai
													:
													guanjian
												} className="img" alt=""/>
											}
											<div className="text">
												<div className="code">项目编码{item.check_code}</div>
												<div className="code2">{item.task_title}</div>
											</div>
										</div>
										<div className="times">
												<div className="time-img"></div>
												<span className="time-one">{item.create_date}</span>
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

export default todolist